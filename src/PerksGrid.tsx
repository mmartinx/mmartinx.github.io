import perks from "./perks.json"
import {Col, Row} from "react-bootstrap"
import StatsContext from "./StatsContext"
import PerkElement from "./PerkElement"

const PerksGrid = () => {
    return (
        <>
            <h3>Perks</h3>
            <StatsContext.Consumer>
                {({getRank}) => {
                    return (
                        <Row style={{padding: 12}}>
                            {
                                perks.map(
                                    category => {
                                        return (
                                            <Col key={category.special} style={{padding: "0px 8px"}}>
                                                <Row style={{fontWeight: 600}}>
                                                    {category.special.substring(0, 2)}: {getRank(category.special)}
                                                </Row>
                                                {
                                                    category.perks.map(
                                                        perk => {
                                                            return (
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
