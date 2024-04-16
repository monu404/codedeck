import { useContext } from "react"
import { CreatePlaygroundModel } from "./CreatePlaygroundModel"

import { ModelContext, modalconstant } from "../ModalProvider";

import { CreateFolderModal } from "./CreateFolderModal";


import {UpdateFoldertitle} from "./UpdateFoldertitle";

export const Modal = () => {

    const modalFeatures = useContext(ModelContext);

    return (
       <>
     
            {modalFeatures.activeModel === modalconstant.CREATE_PLAYGROUND && (
              <CreatePlaygroundModel></CreatePlaygroundModel>

            )}
            {
              modalFeatures.activeModel===modalconstant.CREATE_FOLDER && (
              <CreateFolderModal></CreateFolderModal>
              )
            }

{
              modalFeatures.activeModel===modalconstant.UPDATE_FOLDER_TITLE && (
              <UpdateFoldertitle></UpdateFoldertitle>
              )
            }


        </>
    );
}
