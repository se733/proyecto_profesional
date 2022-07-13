import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Properties from "./components/Properties";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Search from "./commons/Search";
import { Routes, Route } from "react-router";
import Register from "./components/Register";
import PropertiesItem from "./commons/PropertiesItem";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home/properties-item/:id" element={<PropertiesItem/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/properties/properties-item/:id" element={<PropertiesItem/>} />
          <Route path="/search/" element={<Search />} />
          <Route path="/search/:name" element={<Search />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
