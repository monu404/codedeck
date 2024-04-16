import logo from './logo.svg';

import { BrowserRouter } from 'react-router-dom';
import { HomeScreen } from './Screens/HomeScreen';
import { PlaygroundScreen } from './Screens/PlaygroundScreen/Index';
import { Routes, Route } from 'react-router-dom';
import { ModalProvider } from './Providers/ModalProvider.js';
import {PlaygroundProvider} from './Providers/PlaygroundProvider.js';


function App() {


  return (
   
   <PlaygroundProvider>
    <ModalProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen></HomeScreen>}/>
      <Route path="/playground" element={<PlaygroundScreen></PlaygroundScreen>}/>
    </Routes>
    </BrowserRouter>
    </ModalProvider>
   </PlaygroundProvider> 
  );
}

export default App;
