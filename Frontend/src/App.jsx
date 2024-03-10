import React from "react";
import Footer from "./Component/Footer/Footer.jsx";
import Header from "./Component/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Component/Signup/Signup.jsx";
import Login from "./Component/Login/Login.jsx";
import Home from "./Component/Home/Home.jsx";
import Menu from "./Component/Menu/Menu.jsx";


function App(){
  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/menu" element={<Menu/>} /> 

      </Routes>
      <Footer/>
    </BrowserRouter>
    )
}
export default App;