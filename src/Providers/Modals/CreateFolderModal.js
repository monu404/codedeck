import { useContext } from "react";
import { ModelContext } from "../ModalProvider"; // Import ModelContext

import { playgroundContext } from "../PlaygroundProvider"; // Import playgroundContext

// "./CreatePlaygroundModel.scss" - Assuming you don't use it here

export const CreateFolderModal = () => {

    const modalFeatures = useContext(ModelContext);

    const { opennewfolder } = useContext(playgroundContext); // Destructure opennewfolder from playgroundContext

    const onSubmitModal = (e) => {
        e.preventDefault();

        const foldername = e.target.foldername.value;

        // Call opennewfolder with foldername
        opennewfolder(foldername);

        closeModalf();
    }

    const closeModalf = () => {
        // Changed closeModalf to closeModal
        modalFeatures.closeModal();
    }

    return (
        <div className="modal-container">
            <form onSubmit={onSubmitModal} className="modal-body">
                <span onClick={closeModalf} className="material-icons close">close</span>
                <h1>Create new folder</h1>
                <div style={style.inputContainer}>
                    <input name="foldername" style={{ flexGrow: 1 }} placeholder="Enter folder name" />
                    <button type="submit">Create folder</button>
                </div>
            </form>
        </div>
    );
}

const style = {
    inputContainer: {
        display: 'flex',
    }
}
