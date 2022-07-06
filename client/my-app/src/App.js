import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Properties from "./components/Properties";
import Profile from "./components/Profile";
import Home from "./components/Home";
import { Routes, Route } from "react-router";
import Register from "./components/Register";
import { defaultPropertiesRequest } from './state/defaultProperties'

const App = () => {

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
