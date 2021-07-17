import React, {useState} from "react";

type UseBuild = {
    name?: string
}

export const useBuild = ({name: buildName}: UseBuild) => {
    const [name, setName] = useState(buildName)

    return {
        name,
        setName
    } as Build
}

type Build = {
    name?: string,
    setName: (value?: string) => void
}

const BuildContext = React.createContext({} as Build)

export default BuildContext
