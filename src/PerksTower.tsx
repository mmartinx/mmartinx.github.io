import SpecialPerks from "./perks.json"
import {Button, Col, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap"
import StatsContext from "./StatsContext"
import PerkElement from "./PerkElement"
import {useState} from "react";

type PerkTreePerkRank = { rank: number; level: number; description: string; }

type PerkTreePerk = { rank: number; name: string; img: string; ranks: number; ranked: PerkTreePerkRank[]; }

type PerkTreeCategory = { special: string; perks: PerkTreePerk[] }

const PerksTower = () => {
    const [category, setCategory] = useState<PerkTreeCategory>()
    return (
        <>
            <h3>Perks</h3>
            <StatsContext.Consumer>
                {({getRank}) =>
                    <Row style={{padding: 12}}>
                        <ToggleButtonGroup type={"radio"} name={"special"}>
                            {
                                (SpecialPerks as PerkTreeCategory[])
                                .map(it =>
                                    <ToggleButton
                                        onClick={() => setCategory(it)}
                                        value={it.special}
                                        variant={category?.special === it.special ? "primary" : "light"}
                                    >
                                        {it.special.substring(0, 2)}
                                    </ToggleButton>
                                )
                            }
                        </ToggleButtonGroup>
                        {
                            category &&
                            <Col style={{padding: 12}}>
                              <Row style={{fontWeight: 600, textAlign: "center"}}>
                                  <h3>{category.special}: {getRank(category.special)}</h3>
                              </Row>
                                {
                                    category.perks
                                    .map(perk =>
                                        <PerkElement
                                            key={perk.name}
                                            special={category.special}
                                            img={perk.img}
                                            name={perk.name}
                                            rank={perk.rank}
                                            levels={perk.ranked}
                                        />
                                    )
                                }
                            </Col>
                        }
                    </Row>
                }
            </StatsContext.Consumer>
        </>
    )
}

export default PerksTower
