import {Button, ButtonToolbar} from "react-bootstrap";
import {useContext} from "react";
import StatsContext from "./StatsContext";
import PerksContext from "./PerksContext";
import {useRandomizer} from "./Randomizer";
import BuildContext from "./BuildContext";
import RenameModal from "./RenameModal";
import {useModal} from "./Modal";
import ShareModal from "./ShareModal";
import BuildHistoryModal from "./BuildHistoryModal";

const Buttons = () => {
    const {restart} = useContext(BuildContext)
    const {reset: resetStats} = useContext(StatsContext)
    const {reset: resetPerks} = useContext(PerksContext)
    const {show: showShareModal, setShow: setShowShareModal} = useModal()
    const {show: showRenameModal, setShow: setShowRenameModal} = useModal()
    const {show: showBuildHistoryModal, setShow: setShowBuildHistoryModal} = useModal()

    const {randomize, randomizing} = useRandomizer()

    const share = () => setShowShareModal(!showShareModal)

    const save = () => setShowRenameModal(!showRenameModal)

    const reset = () => {
        resetStats();
        resetPerks();
    }

    const recent = () => setShowBuildHistoryModal(!showBuildHistoryModal)

    const buttonStyle = {fontSize: 14, marginRight: 10}

    return (
        <>
            <ButtonToolbar>
                <Button style={buttonStyle} variant={"success"} onClick={() => restart()}>
                    New
                </Button>
                <Button style={buttonStyle} variant={"primary"} onClick={() => save()}>
                    Save
                </Button>
                {
                    showRenameModal &&
                    <RenameModal show={showRenameModal} setShow={setShowRenameModal}/>
                }
                <Button style={buttonStyle} variant={"outline-danger"} onClick={() => reset()}
                        disabled={randomizing}>
                    Reset
                </Button>
                <Button style={buttonStyle} variant={"outline-primary"} onClick={() => share()}
                        disabled={randomizing}>
                    Share
                </Button>
                <ShareModal show={showShareModal} setShow={setShowShareModal}/>
            </ButtonToolbar>
            <ButtonToolbar style={{paddingLeft: 20}}>
                <Button style={buttonStyle} variant={"secondary"} onClick={() => recent()}>
                    Show History
                </Button>
                <BuildHistoryModal show={showBuildHistoryModal} setShow={setShowBuildHistoryModal}/>
                <Button style={buttonStyle} variant={"outline-success"} onClick={() => randomize()}
                        disabled={randomizing}>
                    Randomize
                </Button>
            </ButtonToolbar>
        </>
    )

}

export default Buttons
