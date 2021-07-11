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
import LevelControl from "./LevelControl";
import Bobbleheads from "./Bobbleheads";

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
                            <Bobbleheads/>
                            <LevelControl/>
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
