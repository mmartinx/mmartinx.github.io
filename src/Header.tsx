import {Navbar} from "react-bootstrap"
import Buttons from "./Buttons";
import {useMatchMedia} from "./MatchMedia";

const Header = () => {

    const {gt} = useMatchMedia()

    return (
        <Navbar bg={"light"} style={{marginBottom: 20}}>
            <Navbar.Brand>
                <img src={`${process.env.PUBLIC_URL}/img/brand.jpg`} style={{height: 30, width: 30}}
                     alt={"Brand"}/>
                <span style={{paddingLeft: 10, fontSize: 18, color: "#777", fontWeight: 500}}>
                    Fallout 4 Character Planner
                </span>
            </Navbar.Brand>
            {gt("xs") && <Buttons/>}
        </Navbar>
    )
}

export default Header
