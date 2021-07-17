import "bootstrap/dist/css/bootstrap.min.css"

import {PropsWithChildren, useContext, useEffect, useMemo} from "react"
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
import {useMatchMedia} from "./MatchMedia";
import Buttons from "./Buttons";

const usePreserveState = () => {
    const {SPECIAL, getLevel, getBobbleHeads} = useContext(StatsContext)
    const {perks} = useContext(PerksContext)
    useEffect(() => {
        const state = {
            SPECIAL: SPECIAL,
            level: getLevel(),
            bobbleheads: getBobbleHeads(),
            perksAdded: perks.map(it => {
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
        window.history.replaceState(null, document.title, `#${LZUTF8.compress(JSON.stringify(state), {outputEncoding: "Base64"})}`)
    }, [SPECIAL, perks, getLevel, getBobbleHeads])
}

const AppStateListener = ({children}: PropsWithChildren<any>) => {
    usePreserveState()
    return (<>{children}</>)
}

const AppContextProvider = ({children}: PropsWithChildren<any>) => {
    const {
        SPECIAL,
        level,
        perksAdded,
        bobbleheads
    } = JSON.parse(LZUTF8.decompress(window.location.hash.substring(1, window.location.hash.length), {inputEncoding: "Base64"}) || "{}")
    const stats = useStats({SPECIAL, level, bobbleheads})
    const perks = usePerks({level: stats.getLevel(), perksAdded})
    return (
        <StatsContext.Provider value={stats}>
            <PerksContext.Provider value={useMemo(() => perks, [perks])}>
                <AppStateListener>
                    {children}
                </AppStateListener>
            </PerksContext.Provider>
        </StatsContext.Provider>
    )
}

const App = () => {
    const {eq} = useMatchMedia()
    return (
        <AppContextProvider>
            <Container fluid>
                <Header/>
                {eq("xs") && <div style={{marginBottom: 20}}><Buttons/></div>}
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
        </AppContextProvider>
    )
}

export default App
