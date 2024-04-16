
import { useContext } from "react"
import   "./CreatePlaygroundModel.scss"
import { ModelContext } from "../ModalProvider"
import { playgroundContext } from "../PlaygroundProvider";
export const CreatePlaygroundModel=()=>{

  const modalFeatures=useContext(ModelContext);

  const playgroundfeature=useContext(playgroundContext);

      const closemodal=()=>{
        modalFeatures.closeModal();
      }
   
       
      const onsubmitmodal=(e)=>{
          e.preventDefault();
          const foldername=e.target.foldername.value;
          const filename=e.target.filename.value;
          const language=e.target.language.value; 
          playgroundfeature.createnewplayground({ foldername, filename, language });
          
          closemodal();
      } 

    return  <div className="modal-container">

   <form  className="modal-body"  onSubmit={onsubmitmodal}>
    <span  onClick={closemodal} className="material-icons close">close</span>
    <h1>create ne wplaygroubnd</h1>
    <div  className="item">
      <p>Enter folder name</p>
      <input name="foldername" required></input>
    </div>
    <div className="item">
        <p>Enter the card name</p>
        <input name="filename"  required></input>
    </div>

    <div className="item">
    <select name="language" required>
  <option value="cpp">cpp</option>
  <option value="javascript">javascript</option>
  <option value="java">java</option>
  <option value="python">python</option>

</select>

 <button type="submit">create play ground button</button>
    </div>
   </form>
         
    </div>

}