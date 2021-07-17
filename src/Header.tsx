import {
    Button,
    ButtonToolbar,
    Form,
    InputGroup,
    Modal,
    Navbar,
    OverlayTrigger,
    Tooltip
} from "react-bootstrap"
import StatsContext from "./StatsContext"
import {useContext, useState} from "react";
import {OverlayTriggerRenderProps} from "react-bootstrap/OverlayTrigger";
import PerksContext from "./PerksContext";
import {useRandomizer} from "./Randomizer";

const Header = () => {
    const {reset: resetStats} = useContext(StatsContext)
    const {reset: resetPerks} = useContext(PerksContext)
    const [showShareModal, setShowShareModal] = useState(false)

    const {randomize, randomizing} = useRandomizer()

    const share = () => setShowShareModal(!showShareModal)

    const reset = () => {
        resetStats();
        resetPerks();
    }

    const buttonStyle = {fontSize: 14, marginRight: 10}

    return (
        <Navbar bg={"light"} style={{marginBottom: 20}}>
            <Navbar.Brand>
                <img src={`${process.env.PUBLIC_URL}/img/brand.jpg`} style={{height: 30, width: 30}}
                     alt={"Brand"}/>
                <span style={{paddingLeft: 10, fontSize: 18, color: "#777", fontWeight: 500}}>
                    Fallout 4 Character Planner
                </span>
            </Navbar.Brand>
            <ButtonToolbar>
                <Button style={buttonStyle} variant={"danger"} onClick={() => reset()} disabled={randomizing}>
                    Reset
                </Button>
                <Button style={buttonStyle} onClick={() => share()} disabled={randomizing}>
                    Share
                </Button>
                <Button style={buttonStyle} variant={"warning"} onClick={() => randomize()} disabled={randomizing}>
                    Randomize
                </Button>
            </ButtonToolbar>
            <Modal show={showShareModal} onHide={() => setShowShareModal(false)} centered>
                <Modal.Header>Share your build with friends!</Modal.Header>
                <Modal.Body>
                    <InputGroup>
                        <Form.Control type={"text"} value={window.location.href} readOnly={true}/>
                        <InputGroup.Append>
                            <OverlayTrigger
                                trigger={"click"}
                                delay={50}
                                overlay={
                                    <Tooltip id={"copiedToClipboard"}>
                                        Copied to clipboard!
                                    </Tooltip>
                                }
                                placement={"top"}
                            >
                                {
                                    ({ref, ...triggerHandler}: OverlayTriggerRenderProps) =>
                                        <InputGroup.Text
                                            style={{
                                                cursor: "pointer"
                                            }}
                                            onClick={() => navigator.clipboard.writeText(window.location.href)}
                                            {...triggerHandler}
                                            ref={ref}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="currentColor"
                                                className="bi bi-clipboard"
                                                viewBox="0 0 24 24"
                                                style={{
                                                    marginTop: 4,
                                                    marginLeft: 4
                                                }}
                                            >
                                                <path
                                                    d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                                <path
                                                    d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                            </svg>
                                        </InputGroup.Text>
                                }
                            </OverlayTrigger>
                        </InputGroup.Append>
                    </InputGroup>
                </Modal.Body>
            </Modal>
        </Navbar>
    )
}

export default Header
