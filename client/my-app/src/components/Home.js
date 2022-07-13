import React from "react";
import Carrusel from "./Carrusel";
import PropertiesList from "../commons/PropertiesList";

const Home = () => {



  return (
    <>
      <div>
        <Carrusel />
        <div className="destacados">
          <h1>Propiedades Destacadas</h1>
        </div>
        <PropertiesList />
      </div>
    </>
  );
};

export default Home;
