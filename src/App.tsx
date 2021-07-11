import "bootstrap/dist/css/bootstrap.min.css"

import {Col, Container, Row} from "react-bootstrap"
import RangeSlider from "react-bootstrap-range-slider"

import StatsContext, {useStats} from "./StatsContext"
import PerksContext, {usePerks} from "./PerksContext"
import StartingStats from "./StartingStats"
import Header from "./Header"
import PerksGrid from "./PerksGrid"
import {useMemo} from "react"
import PerksDetail from "./PerksDetail"

const App = () => {
    const stats = useStats()
    const perks = usePerks({level: stats.getLevel()})
    return (
        <StatsContext.Provider value={stats}>
            <PerksContext.Provider value={useMemo(() => perks, [perks])}>
                <Container fluid>
                    <Header/>
                    <Row>
                        <Col xl={3}>
                            <StartingStats/>
                            <div style={{paddingTop: 10, justifyContent: "center"}}>
                                Level: {stats.getLevel()}
                                <div
                                    style={{width: "100%"}}
                                >
                                    <RangeSlider
                                        disabled={stats.pointsRemaining() > 0}
                                        size={"lg"}
                                        value={stats.getLevel()}
                                        tooltip={"off"}
                                        min={1}
                                        max={50}
                                        onChange={changeEvent => {
                                            const level = parseInt(changeEvent.target.value)
                                            stats.setLevel(level)
                                            perks.removePerksBelowLevel(level)
                                        }}
                                    />
                                    {
                                        stats.getLevel() > 1 &&
                                        <p>
                                          Remaining perk
                                          points: {perks.perkPointsRemaining()}
                                        </p>
                                    }
                                </div>
                            </div>
                            <PerksDetail/>
                        </Col>
                        <Col xl={9}>
                            <PerksGrid/>
                        </Col>
                    </Row>
                </Container>
            </PerksContext.Provider>
        </StatsContext.Provider>
    )
}

export default App
