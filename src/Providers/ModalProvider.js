import React, { createContext, useContext, useState } from "react";

export const ModelContext = createContext();


 export const modalconstant={
    CREATE_PLAYGROUND:'CREATE_PLAYGROUND' 
    ,
     CREATE_FOLDER:'CREATE_FOLDER',
     UPDATE_FOLDER_TITLE:'UPDATE_FOLDER_TITLE'
 };

export const ModalProvider = ({ children }) => {
    const [modalType, setModalType] = useState(null);
    const[modalpayload,setmodalpayload]=useState(null);


    const closeModal = () => {;
        setModalType(null);
        setmodalpayload(null);
    }

    const openModal = (modalName) => {
        setModalType(modalName);
    }

    const modalFeatures = {
        openModal: openModal, // Ensure this line is correct
        closeModal: closeModal,
        activeModel: modalType,
        modalpayload,
        setmodalpayload
    }

    return (
        <ModelContext.Provider value={modalFeatures}>
            {children}
        </ModelContext.Provider>
    )
}
