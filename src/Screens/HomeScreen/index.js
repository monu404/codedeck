import './home.scss'
import { RightComponent } from './RightComponent';
export const HomeScreen = () => {

    return (
       <div className="root-container">
          <div className='left-container'>
   <div className="items-container">

        <img src="logo.png"/>
          <h1>Code Deck</h1>
          <h2>Code.Compile.Debug</h2>
            <h3>Monu</h3>
            <p>how are u</p>
          <button>
          <span className="material-icons">add</span>
          <span>Create Playground</span>
          </button>
          </div>
          </div>

          <RightComponent></RightComponent>
       </div>
    );
}
