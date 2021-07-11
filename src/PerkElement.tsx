import {Image, OverlayTrigger, Popover} from "react-bootstrap";
import StatsContext, {Stats} from "./StatsContext";
import PerksContext, {Perks} from "./PerksContext";
import PerkStar from "./PerkStar";
import {OverlayTriggerRenderProps} from "react-bootstrap/OverlayTrigger";

type PerkProps = {
    special: string,
    img: string,
    name: string,
    rank: number,
    levels: any[]
}

const PerkElement = ({special, img, name, rank, levels}: PerkProps) => {
    return (
        <StatsContext.Consumer>
            {
                ({getRank, getLevel}: Stats) => {
                    return (
                        <PerksContext.Consumer>
                            {
                                ({perks, perkPointsRemaining}: Perks) => {
                                    return (
                                        <div style={{paddingTop: 10}}>
                                            <OverlayTrigger
                                                trigger={["hover", "focus"]}
                                                placement={"auto"}
                                                transition={false}
                                                overlay={
                                                    <Popover id={name}>
                                                        <Popover.Title>{name}</Popover.Title>
                                                        <Popover.Content>
                                                            {
                                                                levels.map(level => {
                                                                    return (
                                                                        <p key={`${level.name} ${level.rank}`}>
                                                                            Rank {level.rank}
                                                                            {
                                                                                level.level > getLevel() &&
                                                                                <span style={{
                                                                                    fontSize: 12,
                                                                                    fontWeight: 700,
                                                                                    paddingLeft: 4
                                                                                }}>
                                                                                  (Requires Level {level.level})
                                                                                </span>
                                                                            }: {level.description}
                                                                        </p>
                                                                    )
                                                                })
                                                            }
                                                        </Popover.Content>
                                                    </Popover>
                                                }
                                            >
                                                {
                                                    ({ref, ...triggerHandler}: OverlayTriggerRenderProps) =>
                                                        <div
                                                            ref={ref}
                                                            style={{
                                                                opacity: getRank(special) >= rank ? 1 : 0.3,
                                                                display: "inline-block",
                                                                justifyContent: "center"
                                                            }}>
                                                            <div {...triggerHandler}>
                                                                <Image
                                                                    src={`img/${img}`}
                                                                    alt={name}
                                                                    style={{
                                                                        border: "0px solid #777"
                                                                    }}
                                                                />
                                                            </div>
                                                            <div style={{
                                                                display: "flex",
                                                                justifyContent: "center"
                                                            }}>
                                                                {
                                                                    levels.map(level => <PerkStar
                                                                        key={`${name}-${level.rank}`}
                                                                        filled={!!perks.find(it => it.name === name && it.rank >= level.rank)}
                                                                        enabled={getRank(special) >= rank && getLevel() >= level.level && perkPointsRemaining() > 0}
                                                                        special={special}
                                                                        name={name}
                                                                        rank={level.rank}
                                                                        level={level.level}
                                                                    />)
                                                                }
                                                            </div>
                                                        </div>
                                                }
                                            </OverlayTrigger>
                                        </div>
                                    )
                                }
                            }
                        </PerksContext.Consumer>
                    )
                }
            }
        </StatsContext.Consumer>
    )
}

export default PerkElement
