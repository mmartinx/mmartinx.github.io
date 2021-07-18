import "bootstrap/dist/css/bootstrap.min.css"

import {PropsWithChildren, useContext, useEffect, useMemo} from "react"
import {Col, Container, Row} from "react-bootstrap"

import LZUTF8 from "lzutf8";

import BuildContext, {useBuild} from "./BuildContext";
import StatsContext, {useStats} from "./StatsContext"
import PerksContext, {Perk, usePerks} from "./PerksContext"
import StartingStats from "./StartingStats"
import Header from "./Header"
import PerksGrid from "./PerksGrid"
import PerksDetail from "./PerksDetail"
import Bobbleheads from "./Bobbleheads";
import {useMatchMedia} from "./MatchMedia";
import Buttons from "./Buttons";
import PerksTower from "./PerksTower";
import BuildInfo from "./BuildInfo";
import BuildHistory from "./BuildHistory";

const usePreserveState = () => {
    const {SPECIAL, getLevel, getBobbleHeads} = useContext(StatsContext)
    const {perks} = useContext(PerksContext)
    const {name} = useContext(BuildContext)
    useEffect(() => {
        const state = {
            name,
            SPECIAL,
            level: getLevel(),
            bobbleheads: getBobbleHeads(),
            perks: perks.map(it => {
                const {name, rank} = it
                return {name, rank} as Perk
            }).reduce((arr, perk) => {
                const existing = arr.findIndex(it => it.name === perk.name)
                if (existing >= 0) arr.splice(existing, 1)
                arr.push(perk)
                return arr
            }, [] as Perk[])
        }
        window.history.replaceState(null, document.title, `#${LZUTF8.compress(JSON.stringify(state), {outputEncoding: "Base64"})}`)
    }, [name, SPECIAL, perks, getLevel, getBobbleHeads])
}

const AppStateListener = ({children}: PropsWithChildren<any>) => {
    usePreserveState()
    return (<>{children}</>)
}

const BuildContextProvider = ({name, children}: PropsWithChildren<{ name?: string }>) => {
    const build = useBuild({name})
    return (
        <BuildContext.Provider value={useMemo(() => build, [build])}>
            {children}
        </BuildContext.Provider>
    )
}

const AppContextProvider = ({children}: PropsWithChildren<any>) => {
    const {
        name,
        SPECIAL,
        level,
        perks: perksAdded,
        bobbleheads,
    } = JSON.parse(LZUTF8.decompress(window.location.hash.substring(1, window.location.hash.length), {inputEncoding: "Base64"}) || "{}")
    const stats = useStats({SPECIAL, level, bobbleheads})
    const perks = usePerks({level: stats.getLevel(), perksAdded})
    return (
        <StatsContext.Provider value={useMemo(() => stats, [stats])}>
            <PerksContext.Provider value={useMemo(() => perks, [perks])}>
                <BuildContextProvider name={name}>
                    <AppStateListener>
                        {children}
                    </AppStateListener>
                </BuildContextProvider>
            </PerksContext.Provider>
        </StatsContext.Provider>
    )
}

const App = () => {
    const {eq, gt} = useMatchMedia()
    return (
        <AppContextProvider>
            <Container fluid>
                <Header/>
                {eq("xs") && <div style={{marginBottom: 20}}><Buttons/></div>}
                <Row>
                    <Col xl={3}>
                        <BuildInfo/>
                        <StartingStats/>
                        <Bobbleheads/>
                        <BuildHistory/>
                        <PerksDetail/>
                    </Col>
                    <Col xl={9}>
                        {
                            gt("xs") ?
                                <PerksGrid/>
                                :
                                <PerksTower/>
                        }
                    </Col>
                </Row>
            </Container>
        </AppContextProvider>
    )
}

export default App
