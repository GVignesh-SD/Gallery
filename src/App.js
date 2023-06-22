import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Login'
import Gallery from './Gallery'
function App() {
  return (
        <Routes>
            <Route path={"/gallery"} element={<Gallery/>}/>
            <Route path={"/login"} element={<Login/>}/>
        </Routes>
  );
}

export default App