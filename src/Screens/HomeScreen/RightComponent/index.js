import { useContext } from 'react';
import './index.scss';

import { playgroundContext } from '../../../Providers/PlaygroundProvider';

import { modalconstant, ModelContext } from '../../../Providers/ModalProvider'; // Import ModelContext


  const Fun = ({ foldertitle, cards,id }) => {

     const {deletefolder} =useContext(playgroundContext);
      const {openModal,setmodalpayload}=useContext(ModelContext);
 
     const ondeletefolder=()=>{
        deletefolder(id);
     }
  
      const oneditfolder=()=>{
        setmodalpayload(id)
  openModal(modalconstant.UPDATE_FOLDER_TITLE);
      }

  return (
    <div className="folder-container">
      <div className="folder-header">
        <div className='folder-header-icon'>
          <span className='material-icons' style={{ color: 'rgb(254, 161, 0)' }}>folder</span>
          <span>{foldertitle}</span>
        </div>

        <div className='folder-header-icon'>

          <span className='material-icons' onClick={ondeletefolder} >delete</span>

          <span className='material-icons' onClick={oneditfolder} >edit</span>
          <button>1
            <span className='material-icons'>add</span>
            <span>New Playground</span>
          </button>
        </div>
      </div>

      <div className="cards-container">
        {cards.map((file, index) => (
          <div className="card-holder" key={index}>
            <img src="logo.png" alt="logo" />
            <div className="title-container">
              <span>{file.title}</span>
              <span>Language: {file.language}</span>
            </div>

            <div className="icons">
              <span className='material-icons'>delete</span>
              <span className='material-icons'>edit</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const RightComponent = () => {
  
  const {folder} = useContext(playgroundContext);

  const modalFeatures=useContext(ModelContext);

 const createnewfolder=()=>{
  modalFeatures.openModal(modalconstant.CREATE_FOLDER);

 }
  return (
    <div className="right-container">
      <div className="header">
        <h1> My Playground</h1>

        <div className='add-folder'>
          <span className='material-icons'>add</span>
          <span  onClick={createnewfolder}>New Folder</span>

        </div>
      </div>

      {folder.map((val, index) => (
        <Fun foldertitle={val.title} cards={val.files}  id={val.id} />
      ))}
    </div>
  );
};
