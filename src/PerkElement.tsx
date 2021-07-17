import {Image, OverlayTrigger, Popover} from "react-bootstrap"
import StatsContext from "./StatsContext"
import PerksContext from "./PerksContext"
import PerkStar from "./PerkStar"
import {OverlayTriggerRenderProps} from "react-bootstrap/OverlayTrigger"
import {useContext} from "react";
import {useMatchMedia} from "./MatchMedia";

type PerkProps = {
    special: string,
    img: string,
    name: string,
    rank: number,
    levels: any[]
}

const PerkElement = ({special, img, name, rank, levels}: PerkProps) => {
    const {getLevel, getRank} = useContext(StatsContext)
    const {perks, getPerk} = useContext(PerksContext)
    const {eq} = useMatchMedia()
    const perk = getPerk(name)
    return (
        <div style={{
            paddingTop: 10,
            opacity: getRank(special) >= rank ? 1 : 0.3,
            display: "flex",
            justifyContent: "center"
        }}>
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
                                    const showLevelRequirement = level.level > getLevel() || (perk?.rank ?? 0) < level.rank
                                    return (
                                        <p key={`${name} ${level.rank}`}>
                                            Rank {level.rank}
                                            {
                                                showLevelRequirement &&
                                                <span
                                                    style={{
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        paddingLeft: 4
                                                    }}
                                                >
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
                                    src={`${process.env.PUBLIC_URL}/img/${img}`}
                                    alt={name}
                                    style={{
                                        border: "0px solid #777",
                                        width: eq("xs") ? "66vw" : "100%",
                                        height: eq("xs") ? "66vw" : "100%",
                                    }}
                                />
                            </div>
                            {
                                eq("xs") &&
                                <h4 style={{textAlign: "center", paddingTop: 8}}>{name}</h4>
                            }
                            <div style={{
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                {
                                    levels.map(level => <PerkStar
                                        key={`${name}-${level.rank}`}
                                        filled={!!perks.find(it => it.name === name && it.rank >= level.rank)}
                                        enabled={getRank(special) >= rank && getLevel() >= level.level}
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

export default PerkElement
