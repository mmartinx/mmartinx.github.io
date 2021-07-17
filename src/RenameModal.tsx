import {useContext, useState} from "react";
import BuildContext from "./BuildContext";
import {Button, Form, InputGroup, Modal} from "react-bootstrap";
import {UseModal} from "./Modal";

const RenameModal = ({show, setShow}: UseModal) => {
    const {name: buildName, setName: setBuildName} = useContext(BuildContext)
    const [name, setName] = useState(buildName || "")
    return (
        <Modal show={show} onHide={() => setShow(false)} centered>
            <Modal.Header>Name your build!</Modal.Header>
            <Modal.Body>
                <InputGroup>
                    <Form.Control
                        type={"text"}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    className={"float-end"}
                    onClick={() => {
                        setBuildName(name || undefined)
                        setShow(false)
                    }}
                >
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RenameModal
