import RangeSlider from "react-bootstrap-range-slider";
import {useContext} from "react";
import StatsContext from "./StatsContext";
import PerksContext from "./PerksContext";

const LevelControl = () => {
    const {getLevel, pointsRemaining, setLevel} = useContext(StatsContext)
    const {perkPointsRemaining} = useContext(PerksContext)
    return (
        <div style={{paddingTop: 10}}>
            Level: {getLevel()}
            <div
                style={{width: "100%"}}
            >
                <RangeSlider
                    disabled={pointsRemaining() > 0}
                    size={"lg"}
                    value={getLevel()}
                    tooltip={"off"}
                    min={1}
                    max={50}
                    onChange={changeEvent => {
                        const level = parseInt(changeEvent.target.value)
                        setLevel(level)
                    }}
                />
                {
                    getLevel() > 1 &&
                    perkPointsRemaining() >= 0
                        ?
                        <p>
                            Remaining perk
                            points: {perkPointsRemaining()}
                        </p>
                        :
                        <p>Requires level: {getLevel() - perkPointsRemaining()}</p>
                }
            </div>
        </div>
    )
}

export default LevelControl
