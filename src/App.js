import AddtoCart from './AddtoCart';
import './App.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Signin from './Signin'
import Head from './Head'
import { useState } from 'react';

function App() {
  const[prof,setProf]=useState([])
  return (
    <Router>
    <div className="App">
      {/* /*{<Head/>} */}
      <Routes>
      <Route path="/" element={<Head/>}>
      <Route path="/Signin" element={<Signin  setProf={setProf} prof={prof}/>}></Route> 
      </Route>

      <Route path="/AddtoCart" element={<AddtoCart/>}></Route>
      
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
