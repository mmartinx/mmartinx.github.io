import React, {useState} from "react";

export type SPECIAL = {
    STRENGTH: number,
    PERCEPTION: number,
    ENDURANCE: number,
    CHARISMA: number,
    INTELLIGENCE: number,
    AGILITY: number,
    LUCK: number
}

export type Stats = {
    SPECIAL: SPECIAL,
    increment: (stat: string) => void,
    decrement: (stat: string) => void,
    reset: () => void,
    pointsRemaining: () => number,
    getRank: (stat: string) => number,
    getLevel: () => number,
    setLevel: (level: number) => void,
    getBobbleHeads: () => StatType[],
    bobbleToggle: (stat: StatType) => void,
    hasBobblehead: (stat: string) => boolean
}

export enum StatType {
    STRENGTH = "STRENGTH", PERCEPTION = "PERCEPTION", ENDURANCE = "ENDURANCE", CHARISMA = "CHARISMA", INTELLIGENCE = "INTELLIGENCE", AGILITY = "AGILITY", LUCK = "LUCK"
}

const defaultSpecial = Object.keys(StatType).reduce((obj, key) => {
    obj[key] = 1
    return obj
}, {} as any) as SPECIAL

const MAX_POINTS = 28

export const useStats = ({
                             SPECIAL: special = defaultSpecial,
                             level: initialLevel = 1
                         }: { SPECIAL?: SPECIAL, level?: number }): Stats => {
    const [SPECIAL, setSpecial] = useState<SPECIAL>(special)
    const [level, setLevel] = useState(initialLevel)
    const [bobbleheads, setBobbleheads] = useState<StatType[]>([])

    const changeValue = (stat: string, value: number) => {
        const target = getRank(stat);
        setSpecial({
            ...SPECIAL,
            [stat]: Math.min(Math.max(target + value, 1), bobbleheads.findIndex(it => it === stat) >= 0 ? 11 : 10)
        })
    }

    const increment = (stat: string) => {
        changeValue(stat, 1)
    }

    const decrement = (stat: string) => changeValue(stat, -1)

    const pointsRemaining = () => {
        const pointsUsed = Object.values(SPECIAL).reduce((a, b) => a + Math.min(b, 10), 0) - bobbleheads.length
        return MAX_POINTS - pointsUsed
    }

    const getRank = (stat: string): number => (SPECIAL as any)[stat]

    const reset = () => {
        setLevel(0)
        setSpecial(defaultSpecial)
        setBobbleheads([])
    }

    const bobbleToggle = (stat: StatType) => {
        const found = bobbleheads.findIndex(it => it === stat)
        if (found < 0) {
            bobbleheads.push(stat)
            increment(stat)
        } else {
            bobbleheads.splice(found, 1)
            decrement(stat)
        }
        setBobbleheads([...bobbleheads])
    }

    return {
        SPECIAL,
        increment,
        decrement,
        reset,
        pointsRemaining,
        getRank,
        getLevel: () => level,
        setLevel: (level: number) => setLevel(Math.min(level, 50)),
        getBobbleHeads: () => bobbleheads,
        bobbleToggle,
        hasBobblehead: (stat: string) => !!bobbleheads.find(it => it === stat)
    } as Stats;
}

const StatsContext = React.createContext<Stats>({SPECIAL: defaultSpecial} as Stats)

export default StatsContext
