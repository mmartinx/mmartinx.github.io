import React, {
    MouseEventHandler,
    PropsWithChildren,
    RefObject,
    useContext,
    useEffect,
    useRef,
    useState
} from "react";
import BuildContext from "./BuildContext";
import {ListGroup, ListGroupItem} from "react-bootstrap";

const BuildHistory = () => {
    const {history, remove, removeAll, load} = useContext(BuildContext)

    if (history.length <= 0) {
        return null
    }

    return (
        <div style={{marginBottom: 20}}>
            <span>
                <h3 style={{marginBottom: 10}}>
                    History
                    <span
                        className={"float-end"}
                        style={{
                            marginRight: 12,
                            paddingBottom: 2
                        }}
                    >
                        <ConfirmRemoveButton
                            message={"Are you sure you want to remove all items?"}
                        >
                            <RemoveButton fontSize={24} onClick={() => removeAll()}/>
                        </ConfirmRemoveButton>
                    </span>
                </h3>
            </span>
            <ListGroup>
                {
                    history.map(entry =>
                        <ListGroupItem>
                            <span
                                style={{cursor: "pointer"}}
                                onClick={() => load(entry.id)}
                            >
                                {entry.name}
                            </span>
                            <span className={"float-end"}>
                                <ConfirmRemoveButton
                                    message={"Are you sure you want to remove this item?"}
                                >
                                    <span style={{
                                        fontSize: "0.75em",
                                        paddingRight: 8,
                                        color: "gray",
                                        fontStyle: "italic"
                                    }}>
                                        Last Updated: {entry.updatedAt}
                                    </span>
                                    <RemoveButton onClick={() => remove(entry.id)}/>
                                </ConfirmRemoveButton>
                            </span>
                        </ListGroupItem>
                    )
                }
            </ListGroup>
        </div>
    )
}

type UseOnClickAwayListener = {
    ref: RefObject<HTMLSpanElement>,
    callback: (e: Event) => void
}

const useOnClickAwayListener = ({ref, callback}: UseOnClickAwayListener) => {
    useEffect(() => {
        const listener = (e: Event) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                callback(e)
            }
        }
        document.addEventListener("mousedown", listener)
        return () => {
            document.removeEventListener("mousedown", listener)
        }
    }, [ref, callback])
}

const ConfirmRemoveButton = ({
                                 children,
                                 message
                             }: PropsWithChildren<any> & { message?: string }) => {
    const ref = useRef<HTMLSpanElement>(null)
    const [confirming, setConfirming] = useState(false)
    const confirm = (e: React.MouseEvent<HTMLSpanElement>) => {
        if (!confirming) {
            e.stopPropagation()
        }
        setConfirming(!confirming)
    }

    const cancel = (e: Event) => {
        setConfirming(false)
    }

    useOnClickAwayListener({ref, callback: cancel})

    return (
        <span style={confirming ? {color: "red",} : {}}>
            {
                confirming &&
                <span
                    style={{
                        fontSize: "0.75em",
                        paddingRight: 8,
                        fontStyle: "italic"
                    }}
                >
                    {message ?? "Are you sure?"}
                </span>
            }
            <>
                {
                    React.Children.map(children,
                        child => child.type.name === "RemoveButton" ?
                            <span
                                onClickCapture={(e: React.MouseEvent<HTMLSpanElement>) => confirm(e)}
                                ref={ref}
                            >
                                {child}
                            </span>
                            :
                            confirming ? null : child
                    )
                }
            </>
        </span>
    )

}

const noop = () => {
}

type RemoveButtonProps =
    {
        fontSize?: number, onClick?: MouseEventHandler<SVGSVGElement> | undefined
    }

const RemoveButton = (
    {
        fontSize = 16, onClick = noop
    }
        : RemoveButtonProps) =>
    <svg xmlns="http://www.w3.org/2000/svg" width={`${fontSize}`} height={`${fontSize}`}
         fill="currentColor" className="bi bi-x-circle"
         viewBox="0 0 16 16"
         onClick={onClick}
         style={{cursor: "pointer", fontSize}}
    >
        <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>

export default BuildHistory
