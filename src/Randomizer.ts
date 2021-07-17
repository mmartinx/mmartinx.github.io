import {useContext, useEffect, useState} from "react";
import StatsContext from "./StatsContext";
import PerksContext from "./PerksContext";

export const useRandomizer = () => {
    const {
        getLevel,
        setLevel,
        pointsRemaining,
        increment,
        SPECIAL,
        reset: resetStats
    } = useContext(StatsContext)
    const {
        perkPointsRemaining,
        add: addPerk,
        availablePerks,
        getPerkRank,
        reset: resetPerks
    } = useContext(PerksContext)
    const [randomizing, setRandomizing] = useState(false)

    const randomize = () => {
        resetStats()
        resetPerks()
        setRandomizing(true)
    }

    useEffect(() => {
        if (randomizing) {
            setLevel(50)
            if (pointsRemaining() > 0) {
                const stats = Object.keys(SPECIAL)
                const stat = stats[Math.floor(Math.random() * stats.length)]
                increment(stat)
            }
            if (perkPointsRemaining() > 0) {
                const available = availablePerks()
                .filter(it => (it.requiredSpecial || 999) <= (SPECIAL as any)[it.special])
                const perk = available[Math.floor(Math.random() * available.length)]
                addPerk(perk)
            }
            if (pointsRemaining() <= 0 && perkPointsRemaining() <= 0) {
                setRandomizing(false)
            }
        }
    }, [randomizing, SPECIAL, addPerk, availablePerks, getPerkRank, increment, perkPointsRemaining, pointsRemaining, getLevel, setLevel])

    return {randomize, randomizing}
}
