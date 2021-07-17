import {useState} from "react";

export type UseModal = {
    show: boolean,
    setShow: (value: boolean) => void
}

export const useModal = () => {
    const [show, setShow] = useState(false)

    return {
        show,
        setShow
    } as UseModal
}
