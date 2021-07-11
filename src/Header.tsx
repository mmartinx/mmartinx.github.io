import {Button, Navbar} from "react-bootstrap"
import StatsContext from "./StatsContext"

const Header = () => {
    return (
        <Navbar bg={"light"} style={{marginBottom: 20}}>
            <Navbar.Brand>
                <img src={"img/brand.jpg"} style={{height: 30, width: 30}} alt={"Brand"}/>
                <span style={{paddingLeft: 10, fontSize: 18, color: "#777", fontWeight: 500}}>
                    Fallout 4 Character Planner
                </span>
            </Navbar.Brand>
            <StatsContext.Consumer>
                {({reset}) =>
                    <Button style={{fontSize: 14}} variant={"danger"} onClick={() => reset()}>
                        Reset
                    </Button>
                }
            </StatsContext.Consumer>
        </Navbar>
    )
}

export default Header
