import {Col, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap"
import StatsContext from "./StatsContext"
import PerkElement from "./PerkElement"
import {useContext, useState} from "react";
import {PerksData, PerkTreeCategory} from "./Perks";

const PerksTower = () => {
    const [category, setCategory] = useState<PerkTreeCategory>()
    const {getRank} = useContext(StatsContext)
    return (
        <>
            <h3>Perks</h3>
            <Row style={{padding: 12}}>
                <ToggleButtonGroup type={"radio"} name={"special"}>
                    {
                        PerksData
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
                                    img={perk.img}
                                    special={category.special}
                                    perk={perk}
                                />
                            )
                        }
                    </Col>
                }
            </Row>
        </>
    )
}

export default PerksTower
