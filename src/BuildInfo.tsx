import {useContext} from "react";
import BuildContext from "./BuildContext";

const BuildInfo = () => {
    const {name} = useContext(BuildContext)
    return (
        <h1 style={{marginBottom: 20}}>
            {
                name
                // || <span style={{color: "grey", fontStyle: "italic"}}>Choose a build name</span>
            }
        </h1>
    )
}

export default BuildInfo
