import React, {useEffect, useState} from "react";

import allPerks from "./perks.json"

export type Perk = {
    special: string,
    name: string,
    rank: number,
    level: number,
    description?: string,
    ranks?: number
}

export type Perks = {
    perks: Perk[],
    add: (perk: Perk) => void,
    remove: (perk: Perk) => void,
    perkPointsRemaining: () => number
}

export const usePerks = ({level}: { level: number }): Perks => {
    const [perks, setPerks] = useState<Array<Perk>>([])

    useEffect(() => {
        removePerksBelowLevel(level)
    }, [level])

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

    const removePerksBelowLevel = (level: number) => {
        setPerks(perks.filter(it => it.level < level))
    }

    return {
        perks,
        add,
        remove,
        perkPointsRemaining: () => {
            return level - 1 - perks.length
        }
    } as Perks
}

const PerksContext = React.createContext<Perks>({perks: [] as Perk[]} as Perks)

export default PerksContext
