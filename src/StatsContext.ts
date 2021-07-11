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
    setLevel: (level: number) => void
}

const defaultSpecial = {
    STRENGTH: 1, PERCEPTION: 1, ENDURANCE: 1, CHARISMA: 1, INTELLIGENCE: 1, AGILITY: 1, LUCK: 1
} as SPECIAL

const MAX_POINTS = 28

export const useStats = (): Stats => {
    const [SPECIAL, setSpecial] = useState<SPECIAL>(defaultSpecial)
    const [level, setLevel] = useState(1)

    const changeValue = (stat: string, value: number) => {
        const target = getRank(stat);
        setSpecial({...SPECIAL, [stat]: Math.min(Math.max(target + value, 1), 10)})
    }

    const increment = (stat: string) => {
        changeValue(stat, 1)
    }

    const decrement = (stat: string) => changeValue(stat, -1)

    const pointsRemaining = () => {
        const pointsUsed = Object.values(SPECIAL).reduce((a, b) => a + Math.min(b, 10), 0)
        return MAX_POINTS - pointsUsed
    }

    const getRank = (stat: string): number => (SPECIAL as any)[stat]
    const reset = () => {
        setLevel(0)
        setSpecial(defaultSpecial)
    }

    return {
        SPECIAL,
        increment,
        decrement,
        reset,
        pointsRemaining,
        getRank,
        getLevel: () => level,
        setLevel: (level: number) => setLevel(Math.min(level, 50))
    } as Stats;
}

const StatsContext = React.createContext<Stats>({SPECIAL: defaultSpecial} as Stats)

export default StatsContext
