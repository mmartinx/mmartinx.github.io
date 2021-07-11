import StatsContext, {Stats} from "./StatsContext"
import {Button, ListGroup, ListGroupItem} from "react-bootstrap"

const StartingStats = () => {
    return (
        <StatsContext.Consumer>
            {
                ({SPECIAL, pointsRemaining}: Stats) => {
                    return (
                        <>
                            <div style={{padding: 2, marginBottom: 10}}>
                                <h3>S.P.E.C.I.A.L</h3>
                                <span>{pointsRemaining()} points left to spend</span>
                            </div>
                            <ListGroup>
                                {
                                    Object.entries(SPECIAL)
                                    .map(
                                        ([name, value]) => <Stat key={name} name={name}
                                                                 value={value}/>
                                    )
                                }
                            </ListGroup>
                        </>
                    )
                }
            }
        </StatsContext.Consumer>
    )
}

type StatProps = {
    name: string,
    value: number
}

const Stat = ({name, value}: StatProps) => {

    return (
        <StatsContext.Consumer>
            {
                ({increment, decrement, pointsRemaining, getRank, hasBobblehead}: Stats) =>
                    <ListGroupItem>
                        <span style={{userSelect: "none"}}>
                            {name}:
                        </span>
                        <span className={"float-end"}>
                            <Button size={"sm"}
                                    style={{padding: ".1rem .5rem"}}
                                    onClick={() => decrement(name)}
                                    disabled={value <= 1}
                            >
                                -
                            </Button>
                            <span
                                style={{
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    minWidth: 40,
                                    userSelect: "none"
                                }}
                            >
                                {value}
                            </span>
                            <Button size={"sm"}
                                    style={{padding: ".1rem .5rem"}}
                                    onClick={() => increment(name)}
                                    disabled={getRank(name) >= (hasBobblehead(name) ? 11 : 10) || pointsRemaining() <= 0}
                            >
                                +
                            </Button>
                        </span>
                    </ListGroupItem>
            }
        </StatsContext.Consumer>
    )
}

export default StartingStats
