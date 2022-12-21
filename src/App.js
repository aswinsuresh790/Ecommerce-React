import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header/Header';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import {Routes,Route, Await} from 'react-router-dom'
import Addcart from './pages/Addcart';
import { async } from '@firebase/util';
import { FetchAllData } from './firebase/firestore';
import { useEffect } from 'react';
import { useStateValue } from './redux/StateConttext';
import { actionType } from './redux/redux';

function App() {
const[{fooditems},dispatch]=useStateValue()
const FetchData=async()=>{
 await FetchAllData().then(data=>{ console.log(data)
dispatch({
  type:actionType.GET_FOODITEM,
  fooditem:data,
 }    )
})
}
useEffect(()=>{
FetchData()
},[])
  return (
   
    
    <AnimatePresence mode='wait' >
    

    <div className="App">
    <Header/>

    <Routes>

<Route path='/' element={<Home/>}></Route>
<Route path='addnewitem' element={<Addcart/>}></Route> 

</Routes>   
    </div>
   
    </AnimatePresence >
 
 
  );
}

export default App;
