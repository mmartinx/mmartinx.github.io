import React, {useCallback, useContext, useState} from "react";
import StatsContext, {SPECIAL} from "./StatsContext";
import PerksContext, {Perk} from "./PerksContext";
import LZUTF8 from "lzutf8";
import {v4 as uuid_v4} from "uuid";

type Entry = { data: string } & Metadata

const getDb = () => {
    return JSON.parse(window.localStorage.getItem("DATABASE") ?? "[]") as Array<Entry>
}

const updateDb = (entry: Entry) => {
    const db = getDb()
    const filtered = db.filter(it => it.id !== entry.id)
    filtered.unshift(entry)
    window.localStorage.setItem("DATABASE", JSON.stringify(filtered))
}

const setDb = (collection: Entry[]) => {
    window.localStorage.setItem("DATABASE", JSON.stringify(collection))
}

type Metadata = { id: string, name: string, createdAt: Date, updatedAt: Date }

type BuildData = {
    SPECIAL: SPECIAL,
    perks: Perk[]
}

type UseBuild = {
    name?: string
}

export const useBuild = ({name: buildName}: UseBuild) => {
    const {SPECIAL, setSpecial, reset: resetStats} = useContext(StatsContext)
    const {perks, setPerks, reset: resetPerks} = useContext(PerksContext)
    const [name, setName] = useState<string | undefined>(buildName)
    const [id, setId] = useState(uuid_v4())
    const [lastSaved, setLastSaved] = useState<Date | undefined>()
    const [history, setHistory] = useState<Metadata[]>(getDb())

    const save = useCallback((buildName: string) => {
        const db = getDb()
        const now = new Date()
        const entry = db.find(it => it.id === id) as Entry ?? {
            id,
            createdAt: now
        }
        const data = LZUTF8.compress(JSON.stringify({
            name: buildName,
            SPECIAL,
            perks
        } as BuildData), {outputEncoding: "Base64"}) as string
        updateDb({...entry, name: buildName, data, updatedAt: now})
        setLastSaved(now)
        setName(buildName)
        setHistory(getDb())
    }, [SPECIAL, perks, id, setLastSaved, setName, setHistory])

    const get = useCallback((id: string): BuildData & Metadata | undefined => {
        const db = getDb()
        const one = db.find(it => it.id === id)
        if (one) {
            const {id, name, data, createdAt, updatedAt} = one
            const build = JSON.parse(LZUTF8.decompress(data, {inputEncoding: "Base64"}) ?? "{}") as BuildData
            return {id, name, ...build, createdAt, updatedAt}
        }
        return undefined
    }, [])

    const remove = useCallback((id: string) => {
        const db = getDb()
        const filtered = db.filter(it => it.id !== id)
        setDb(filtered)
        setHistory(filtered)
    }, [])

    const removeAll = useCallback(() => {
        setDb([])
        setHistory([])
    }, [])

    const restart = () => {
        setId(uuid_v4())
        setName(undefined)
        resetStats()
        resetPerks()
    }

    const load = (id: string) => {
        const target = get(id)
        if (target) {
            const {id, name, perks, SPECIAL} = target
            setId(id)
            setName(name)
            setPerks(perks)
            setSpecial(SPECIAL)
        }
    }

    return {
        id,
        name,
        setName,
        lastSaved,
        get,
        history,
        save,
        restart,
        remove,
        removeAll,
        load
    } as Build
}

type Build = {
    id: string,
    name?: string,
    lastSaved?: Date,
    get: (id: string) => BuildData & Metadata | undefined,
    history: Metadata[]
    save: (buildName: string) => void,
    restart: () => void,
    remove: (id: string) => void,
    removeAll: () => void,
    load: (id: string) => void
}

const BuildContext = React.createContext({} as Build)

export default BuildContext

const initDb = () => {
    const db = getDb()
    if (db) {
        return;
    }
    window.localStorage.setItem("DATABASE", JSON.stringify([]))
}

initDb()
