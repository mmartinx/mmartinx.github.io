import {Image, OverlayTrigger, Popover} from "react-bootstrap"
import StatsContext from "./StatsContext"
import PerksContext from "./PerksContext"
import PerkStar from "./PerkStar"
import {OverlayTriggerRenderProps} from "react-bootstrap/OverlayTrigger"
import {useContext} from "react";
import {useMatchMedia} from "./MatchMedia";
import {PerkTreePerk} from "./Perks";

type PerkProps = {
    special: string,
    img: string,
    perk: PerkTreePerk
}

const PerkElement = ({special, perk: perkTreePerk}: PerkProps) => {
    const {getLevel, getRank} = useContext(StatsContext)
    const {perks, getPerk} = useContext(PerksContext)
    const {eq} = useMatchMedia()
    const {img, name, rank: requiredSpecial, ranked} = perkTreePerk
    const obtainable = getRank(special) >= requiredSpecial
    const perk = getPerk(name)
    return (
        <div style={{
            paddingTop: 10,
            opacity: obtainable ? 1 : 0.3,
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
                                ranked.map(it => {
                                    const {level, rank, description} = it
                                    const showLevelRequirement = (perk?.rank ?? 0) < rank
                                    return (
                                        <p key={`${name} ${rank}`}>
                                            Rank {rank}
                                            {
                                                showLevelRequirement &&
                                                <span
                                                    style={{
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        paddingLeft: 4
                                                    }}
                                                >
                                                    {

                                                        level ?
                                                            `(Requires Level ${level})`
                                                            :
                                                            !obtainable && `(Requires ${special} ${requiredSpecial})`
                                                    }
                                                </span>
                                            }: {description}
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
                                opacity: obtainable ? 1 : 0.3,
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
                                    ranked.map(it => <PerkStar
                                        key={`${name}-${it.rank}`}
                                        filled={!!perks.find(perk => perk.name === name && perk.rank >= it.rank)}
                                        enabled={obtainable && getLevel() >= it.level}
                                        special={special}
                                        name={name}
                                        rank={it.rank}
                                        level={it.level}
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
