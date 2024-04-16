
import   "./CreatePlaygroundModel.scss"
import React, { useContext } from 'react'

import { ModelContext } from "../ModalProvider"; 
import { playgroundContext } from "../PlaygroundProvider";


export  const UpdateFoldertitle=()=>{

const {closeModal,modalpayload}=useContext(ModelContext);

const {editfoldertitle}=useContext(playgroundContext);

  const onsubmitmodal=(e)=>{
  e.preventDefault();
  const name=e.target.foldername.value;  
  editfoldertitle(name,modalpayload);
  
  closeModal();
  }
  return (
    <div  className="modal-container">
       <form  className="modal-body" onSubmit={onsubmitmodal}>
       <h1>update folder title</h1>
     <span  onClick={closeModal} className="material-icons close">close</span>
     <div >
         <input name="foldername" style={{ flexGrow: 1 }} placeholder="Enter folder name" required/>
         <button type="submit">Create folder</button>
            </div>
     </form>
    </div>
  )
}


