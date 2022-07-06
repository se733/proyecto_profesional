import React from "react";
import Carrusel from "./Carrusel";
import Featured from "./Featured";

const Home = () => {
  return (
    <>
      <div>
        <Carrusel />
        <div className="destacados">
          <h1>Propiedades Destacadas</h1>
        </div>
        <Featured />
      </div>
    </>
  );
};

export default Home;
