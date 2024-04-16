import React, { useContext } from 'react';
import { Modal } from '../../Providers/Modals/Modal';
import './home.scss'
import { RightComponent } from './RightComponent';
import { ModelContext, modalconstant } from '../../Providers/ModalProvider';
export const HomeScreen = () => {
   const modalFeatures = useContext(ModelContext);

    const openCreatePlaygroundModal = () => {

        modalFeatures.openModal(modalconstant.CREATE_PLAYGROUND);
    }

    return (
       <div className="root-container">
          <div className='left-container'>
              <div className="items-container">
                  <img src="logo.png" alt="Logo"/>
                  <h1>Code Deck</h1>
                  <h2>Code. Compile. Debug</h2>
                  <button onClick={openCreatePlaygroundModal}>
                      <span className="material-icons">add</span>
                      <span>Create Playground</span>
                  </button>
              </div>
          </div>
          <RightComponent />
          <Modal />
       </div>
    );
}
