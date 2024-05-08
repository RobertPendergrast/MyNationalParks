
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import React, {useState, useEffect} from "react";

import './components/styles.css';
import './pages/styles.css';

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/profile" element = {<Profile />} />
        </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
