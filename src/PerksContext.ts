import React, {useEffect, useMemo, useState} from "react";
import {PerksData} from "./Perks";

export type Perk = {
    special: string,
    name: string,
    rank: number,
    level: number,
    requiredSpecial?: number,
    description?: string,
    ranks?: number
}

export type Perks = {
    perks: Perk[],
    add: (perk: Perk) => void,
    remove: (perk: Perk) => void,
    perkPointsRemaining: () => number,
    availablePerks: () => Perk[],
    reset: () => void,
    perkLevelRequired: number,
    getPerkRank: (name: String) => number,
    getPerk: (name: String) => Perk | undefined
}

type UsePerks = { level: number, perksAdded?: Perk[] }

export const usePerks = ({level, perksAdded = []}: UsePerks): Perks => {
    const [perks, setPerks] = useState<Array<Perk>>(
        PerksData
        .flatMap((it: any) => {
            const {special, perks} = it
            return perks.map((it: any) => ({special, ...it}))
        })
        .flatMap((it: any) => {
            const {special, name, rank: requiredSpecial, ranked} = it
            return ranked.map((it: any) => {
                const {level, rank, description} = it
                return {
                    special,
                    name,
                    level,
                    rank,
                    description,
                    requiredSpecial,
                    ranks: ranked.length
                }
            })
        })
        .filter(it => perksAdded.find(added => it.name === added.name && it.rank <= added.rank))
    )

    const add = (perk: Perk) => {
        const local = PerksData
        .find(it => it.special === perk.special)
        ?.perks
        .find(it => it.name === perk.name)
        const add = local
        ?.ranked
        .map(it => ({...it, name: local.name, ranks: local.ranks, requiredSpecial: local.rank}))
        .filter(it => it.rank <= perk.rank)
        .map(it => ({...it, special: perk.special} as Perk)) as Perk[]
        const other = perks.filter(it => it.name !== perk.name)
        setPerks([...other].concat(add))
    }

    const remove = (perk: Perk) => {
        const existing = perks.filter(it => it.name === perk.name)
        const other = perks.filter(it => it.name !== perk.name)
        const higher = existing.find(it => it.rank > perk.rank)
        const add = existing.filter(it => higher ? it.rank <= perk.rank : it.rank < perk.rank)
        setPerks([...other, ...add])
    }

    const perkPointsRemaining = () => level - 1 - perks.length

    const availablePerks = () =>
        PerksData
        .flatMap((it: any) => {
            const {special, perks} = it
            return perks.map((it: any) => ({special, ...it}))
        })
        .flatMap((it: any) => {
            const {special, name, rank: requiredSpecial, ranked} = it
            return ranked.map((it: any) => {
                const {level, rank, description} = it
                return {
                    special,
                    name,
                    level,
                    rank,
                    requiredSpecial,
                    description,
                    ranks: ranked.length
                }
            })
        })
        .filter(it => !perks.find(perk => it.name === perk.name && it.rank <= perk.rank))

    const getPerk = (name: String) => perks
    .filter(it => it.name === name)
    .reduce((a, b) => a.rank > b.rank ? a : b, {} as Perk)

    const getPerkRank = (name: String) => perks.filter(it => it.name === name)?.length ?? 0

    const reset = () => {
        setPerks([])
    }

    const perkLevelRequired = useMemo(() => perks.reduce((a, b) => a.level > b.level ? a : b, {} as Perk).level ?? 0, [perks])

    useEffect(() => {
        setPerks(perks => perks.filter(it => it.level < level))
    }, [level])

    return {
        perks,
        add,
        remove,
        perkPointsRemaining,
        availablePerks,
        getPerkRank,
        getPerk,
        perkLevelRequired,
        reset
    } as Perks
}

const PerksContext = React.createContext<Perks>({perks: [] as Perk[]} as Perks)

export default PerksContext
