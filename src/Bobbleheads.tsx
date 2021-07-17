import {Image} from "react-bootstrap";
import StatsContext, {StatType} from "./StatsContext";

const Bobbleheads = () =>
    <StatsContext.Consumer>
        {({bobbleToggle, hasBobblehead}) =>
            <div style={{
                display: "inline-flex",
                justifyContent: "space-evenly",
                width: "100%",
                textAlign: "center",
                paddingTop: 10
            }}>
                {Object.keys(StatType).map(name => name as StatType).map(name =>
                    <span
                        key={name}
                        style={{
                            padding: 10,
                            opacity: hasBobblehead(name) ? 1 : 0.5,
                            cursor: "pointer"
                        }}
                        onClick={() => bobbleToggle(name)}
                    >
                            <Image
                                style={{
                                    maxHeight: 40,
                                    maxWidth: 30,
                                    userSelect: "none"
                                }}
                                src={`${process.env.PUBLIC_URL}/img/bobblehead.png`}
                            />
                            <p style={{userSelect: "none"}}>{name.substring(0, 2)}</p>
                    </span>
                )}
            </div>
        }
    </StatsContext.Consumer>

export default Bobbleheads
