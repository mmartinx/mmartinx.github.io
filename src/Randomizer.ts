import {useContext, useEffect, useState} from "react";
import StatsContext from "./StatsContext";
import PerksContext from "./PerksContext";

const MAX_FAILURES = 100

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
    const [failedAddPerkCount, setFailedAddPerkCount] = useState(0)

    const randomize = () => {
        resetStats()
        resetPerks()
        setLevel(50)
        setRandomizing(true)
    }

    useEffect(() => {
        if (randomizing) {
            if (pointsRemaining() > 0) {
                const stats = Object.keys(SPECIAL)
                const stat = stats[Math.floor(Math.random() * stats.length)]
                increment(stat)
            }
            if (perkPointsRemaining() > 0) {
                const available = availablePerks()
                    .filter(it => (it.requiredSpecial || 999) <= (SPECIAL as any)[it.special])
                const perk = available[Math.floor(Math.random() * available.length)]
                if (perkPointsRemaining() >= (perk.rank - getPerkRank(perk.name))) {
                    addPerk(perk)
                } else {
                    setFailedAddPerkCount(count => count + 1)
                }
            }
            const failed = failedAddPerkCount >= MAX_FAILURES
            const outOfPoints = pointsRemaining() <= 0 && perkPointsRemaining() <= 0
            if (failed || outOfPoints) {
                setRandomizing(false)
            }
        }
    }, [
        randomizing, SPECIAL, addPerk, availablePerks, getPerkRank, increment, perkPointsRemaining,
        pointsRemaining, getLevel, setLevel, failedAddPerkCount
    ])

    return {randomize, randomizing}
}
