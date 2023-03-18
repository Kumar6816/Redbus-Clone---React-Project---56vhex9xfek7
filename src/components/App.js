import React from 'react'
import '../styles/App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
const App = () => {


  return (
    <div id="main">

      <BrowserRouter>
        <h1>sivank</h1>
        <Link to='/footer'>te</Link>
        <Routes>
          <Route path='/header' element={<Header />} />
          <Route path='/footer' element={<Footer />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
