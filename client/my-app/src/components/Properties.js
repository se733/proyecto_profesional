import React from "react";
import PropertiesList from "../commons/PropertiesList";

const Properties = () => {
  return (
    <>
      {/* Carrusel */}
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner carrusel">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src="https://www.gratistodo.com/wp-content/uploads/2017/02/Casas-Modernas-6.jpg"
              class="d-block w-100 "
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://4.bp.blogspot.com/-mpjJuaokduo/UTbUGS0ijiI/AAAAAAABsPQ/DO-qsROMjbs/s1600/fondos-y-wallpapers-de-casas-y-residencias-bonitas-amazing-big-houses-3.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.gratistodo.com/wp-content/uploads/2017/02/Casas-Modernas-4.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <PropertiesList />
    </>
  );
};

export default Properties;
