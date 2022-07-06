import React from "react";

const Carrusel = () => {
  return (
    <div className="hero">
      <div className="contenido-hero">
        <h1>
          Mucho más que<span> Tu hogar </span>
        </h1>
        <div>
        <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="¿Que propiedad buscas?"
              aria-label="Search"
            />
            <button class="btn btn-outline-secondary text-white" type="submit">
              Buscar 
            </button>
          </form>
        </div>
        {/* <a className="boton" href="#">
          Contactar
        </a> */}
      </div>
    </div>

    // /* // <div></div>
    // //   id="carouselExampleFade"
    // //   class="carousel slide carousel-fade img_"
    // //   data-bs-ride="carousel"
    // // >
    // //   <div class="carousel-inner img_">
    // //     <div class="carousel-item active">
    // //       <img src="https://www.orm-arquitectos.com/wp-content/uploads/2020/06/proyecto-calle-sorolla-900x600-2.jpg" class="d-block w-100 img_" alt="..." />
    // //     </div>
    // //     <div class="carousel-item">
    // //       <img src="http://www.poterono.com/wp-content/uploads/2018/06/3dunifamiliar1.jpg" class="d-block w-100 img_" alt="..." />
    // //     </div>
    // //     <div class="carousel-item">
    // //       <img src="https://farm2.staticflickr.com/1525/26653440191_877479169a.jpg" class="d-block w-100 img_" alt="..." />
    // //     </div>
    // //   </div>
    // //   <button */}
    // {/* //     class="carousel-control-prev"
    // //     type="button"
    // //     data-bs-target="#carouselExampleFade"
    // //     data-bs-slide="prev"
    // //   >
    // //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    // //     <span class="visually-hidden">Previous</span>
    // //   </button> */}
    // {/* //   <button */}
    // {/* //     class="carousel-control-next"
    // //     type="button"
    // //     data-bs-target="#carouselExampleFade"
    // //     data-bs-slide="next"
    // //   >
    // //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    // //     <span class="visually-hidden">Next</span>
    // //   </button> */}
    // {/* // </div> */}
  );
};

export default Carrusel;
