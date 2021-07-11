import 'bootstrap/dist/css/bootstrap.min.css';

import {Col, Container, Row} from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';

import StatsContext, {useStats} from "./StatsContext"
import PerksContext, {usePerks} from "./PerksContext"
import StartingStats from "./StartingStats"
import Header from "./Header";
import PerksGrid from "./PerksGrid";
import {useMemo} from "react";

const App = () => {
    const stats = useStats();
    const perks = usePerks({level: stats.getLevel()});
    return (
        <StatsContext.Provider value={stats}>
            <PerksContext.Provider value={useMemo(() => perks, [perks])}>
                <Container fluid>
                    <Header/>
                    <Row>
                        <Col md={3}>
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
                            <div>
                                {
                                    (() => {
                                        const map = perks.perks
                                        .reduce((obj, it) => {
                                            const {name, ranks, rank, level, description} = it
                                            const target = obj[it.name] || {name, ranks, ranked: []}
                                            target.ranked.push({rank, level, description})
                                            obj[it.name] = target
                                            return obj
                                        }, {} as any)
                                        return Object.values(map).map((value: any) => (
                                            <>
                                                <p>{value.name}: {value.ranked.length} / {value.ranks}</p>
                                                {
                                                    value.ranked.map((rank: any) =>
                                                        <p style={{
                                                            paddingLeft: 20,
                                                            fontSize: 12
                                                        }}>{rank.description}</p>)
                                                }
                                            </>
                                        ))
                                    })()

                                }
                            </div>
                        </Col>
                        <Col md={9}>
                            <PerksGrid/>
                        </Col>
                    </Row>
                </Container>
            </PerksContext.Provider>
        </StatsContext.Provider>
    );
}

export default App;
