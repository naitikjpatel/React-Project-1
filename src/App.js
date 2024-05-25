
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import { useState } from 'react';
function App() {
  
  const [fromData,setFromData]=useState({
    amount:"",
    rate:"",
    year:""
})

  return (
    <div className="App">
      
      <BrowserRouter>
      
      <Routes>

      <Route path='/' element={<Home fromData={fromData} setFromData={setFromData}/>}></Route>
      
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
