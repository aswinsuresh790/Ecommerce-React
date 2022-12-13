import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header/Header';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'
import Addcart from './pages/Addcart';

function App() {
  return (
   
    
    <AnimatePresence mode='wait' >
    

    <div className="App">
    <Header/>

    <Routes>

<Route path='/' element={<Home/>}></Route>
<Route path='addcart' element={<Addcart/>}></Route> 

</Routes>   
    </div>
   
    </AnimatePresence >
 
 
  );
}

export default App;
