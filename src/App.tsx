import "bootstrap/dist/css/bootstrap.min.css"

import {useEffect, useMemo} from "react"
import {Col, Container, Row} from "react-bootstrap"

import LZUTF8 from "lzutf8";

import StatsContext, {useStats} from "./StatsContext"
import PerksContext, {Perk, usePerks} from "./PerksContext"
import StartingStats from "./StartingStats"
import Header from "./Header"
import PerksGrid from "./PerksGrid"
import PerksDetail from "./PerksDetail"
import LevelControl from "./LevelControl";
import Bobbleheads from "./Bobbleheads";

const App = () => {
    const {
        SPECIAL,
        level,
        perksAdded
    } = JSON.parse(LZUTF8.decompress(window.location.hash.substring(1, window.location.hash.length), {inputEncoding: "Base64"}) || "{}")
    const stats = useStats({SPECIAL, level})
    const perks = usePerks({level: stats.getLevel(), perksAdded})
    const state = {
        SPECIAL: stats.SPECIAL,
        level: stats.getLevel(),
        perksAdded: perks.perks.map(it => {
            const {name, rank} = it
            return {name, rank} as Perk
        })
        .reduce((arr, perk) => {
            const existing = arr.findIndex(it => it.name === perk.name)
            if (existing >= 0) arr.splice(existing, 1)
            arr.push(perk)
            return arr
        }, [] as Perk[])
    }
    window.history.pushState(null, document.title, `#${LZUTF8.compress(JSON.stringify(state), {outputEncoding: "Base64"})}`)
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
