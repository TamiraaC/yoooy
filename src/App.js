import React from 'react';
import Home from './container/home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Red from "./components/red"
import White from './components/white';
import Green from './components/green';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/red' element={<Red/>}/>
        <Route path='/white'element={<White/>}/>
        <Route path='/green' element={<Green/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
