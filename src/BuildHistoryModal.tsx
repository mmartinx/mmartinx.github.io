import {UseModal} from "./Modal";
import {Modal} from "react-bootstrap";
import BuildHistory from "./BuildHistory";

const BuildHistoryModal = ({show, setShow}: UseModal) =>
    <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        size={"lg"}
    >
        <Modal.Header>Recent builds</Modal.Header>
        <Modal.Body>
            <BuildHistory/>
        </Modal.Body>
    </Modal>

export default BuildHistoryModal
