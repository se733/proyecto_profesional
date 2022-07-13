import React from "react";

import { Link } from "react-router-dom";

const Carrusel = () => {
  return (
    <div className="hero">
      <div className="contenido-hero">
        <h1>Mucho más que Tu hogar</h1>
        <div>
          <Link to="/search">
            <button class="btn btn-secondary text-white" type="submit">
              Buscar Propiedades 
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
