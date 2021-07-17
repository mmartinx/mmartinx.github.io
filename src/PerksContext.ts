import React, {useEffect, useState} from "react";

import allPerks from "./perks.json"

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
    getPerkRank: (name: String) => number
}

export const usePerks = ({
                             level,
                             perksAdded = []
                         }: { level: number, perksAdded?: Perk[] }): Perks => {
    const [perks, setPerks] = useState<Array<Perk>>(
        allPerks
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
        const local = allPerks
        .find(it => it.special === perk.special)
        ?.perks
        .find(it => it.name === perk.name)
        const add = local
        ?.ranked
        .map(it => ({...it, name: local.name, ranks: local.ranks}))
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

    const availablePerks = () =>
        allPerks
        .flatMap((it: any) => {
            const {special, perks} = it
            return perks.map((it: any) => ({special, ...it}))
        })
        .flatMap((it: any) => {
            const {special, name, rank: requiredSpecial, ranked} = it
            return ranked.map((it: any) => {
                const {level, rank, description} = it
                return {special, name, level, rank, requiredSpecial, description, ranks: ranked.length}
            })
        })
        .filter(it => !perks.find(perk => it.name === perk.name && it.rank <= perk.rank))

    const getPerkRank = (name: String) => perks.filter(it => it.name === name)?.length ?? 0

    const reset = () => {
        setPerks([])
    }

    useEffect(() => {
        setPerks(perks => perks.filter(it => it.level < level))
    }, [level])

    return {
        perks,
        add,
        remove,
        perkPointsRemaining: () => {
            return level - 1 - perks.length
        },
        availablePerks,
        getPerkRank,
        reset
    } as Perks
}

const PerksContext = React.createContext<Perks>({perks: [] as Perk[]} as Perks)

export default PerksContext
