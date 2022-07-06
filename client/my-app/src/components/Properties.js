import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { defaultPropertiesRequest } from "../state/defaultProperties";

const Properties = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.defaultProperties);

  useEffect(() => {
    dispatch(defaultPropertiesRequest());
  }, []);
  
  console.log(properties);

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
      {/* cards */}

      <Link to={`/properties/${properties.id}`}>
        <div className="div_featured"></div>
        <div className="div_featured">
          <div className="card" style={{ width: "21rem" }}>
            <img
              src={properties.image}
              className="card-c"
              alt={properties.name}
            />
            <div class="card-body cards">
              <h5 class="card-title">{properties.name}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <hr />
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </Link>
      {/* <div className="div_featured">
        <div class="card" style={{ width: "21rem" }}>
          <img
            src="https://www.gratistodo.com/wp-content/uploads/2017/02/Casas-Modernas-1.jpg"
            class="card-c"
            alt="..."
          />
          <div class="card-body cards">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
           <hr/>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <div class="card" style={{ width: "21rem" }}>
          <img
            src="https://www.gratistodo.com/wp-content/uploads/2017/02/Casas-Modernas-2.jpg"
            class="card-c"
            alt="..."
          />
          <div class="card-body cards">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <hr/>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <div class="card" style={{ width: "21rem" }}>
          <img
            src="https://www.gratistodo.com/wp-content/uploads/2017/02/Casas-Modernas-3.jpg"
            class="card-c"
            alt="..."
          />
          <div class="card-body cards">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <hr/>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <div class="card" style={{ width: "21rem" }}>
          <img
            src="https://www.gratistodo.com/wp-content/uploads/2017/02/Casas-Modernas-4.jpg"
            class="card-c"
            alt="..."
          />
          <div class="card-body cards">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <hr/>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "21rem" }}>
          <img
            src="https://www.gratistodo.com/wp-content/uploads/2017/02/Casas-Modernas-5.jpg"
            class="card-c"
            alt="..."
          />
          <div class="card-body cards">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <hr/>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "21rem" }}>
          <img
            src="https://www.gratistodo.com/wp-content/uploads/2017/02/Casas-Modernas-6.jpg"
            class="card-c"
            alt="..."
          />
          <div class="card-body cards">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <hr/>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Properties;
