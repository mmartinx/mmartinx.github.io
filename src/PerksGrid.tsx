import {Col, Row} from "react-bootstrap"
import StatsContext from "./StatsContext"
import PerkElement from "./PerkElement"
import {PerksData} from "./Perks";

const PerksGrid = () => {
    return (
        <>
            <h3>Perks</h3>
            <StatsContext.Consumer>
                {({getRank}) => {
                    return (
                        <Row style={{padding: 12}}>
                            {
                                PerksData.map(
                                    category => {
                                        return (
                                            <Col key={category.special}
                                                 style={{padding: "0px 12px"}}>
                                                <Row style={{fontWeight: 600}}>
                                                    {category.special.substring(0, 2)}: {getRank(category.special)}
                                                </Row>
                                                {
                                                    category.perks.map(
                                                        perk => {
                                                            return (
                                                                <PerkElement
                                                                    key={perk.name}
                                                                    img={perk.img}
                                                                    special={category.special}
                                                                    perk={perk}
                                                                />
                                                            )
                                                        }
                                                    )
                                                }
                                            </Col>
                                        )
                                    }
                                )
                            }
                        </Row>
                    )
                }}
            </StatsContext.Consumer>
        </>
    )
}

export default PerksGrid
