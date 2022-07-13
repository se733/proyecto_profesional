import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutRequest } from "../state/user";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logoutRequest())
      .then(() => navigate("/login") & localStorage.removeItem("user"))
      .catch((err) => console.log(err));
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light navbar1_ ">
      <div class="container-fluid">
        <Link className="navbar-brand" to="/home">
          AMERICA
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className="nav-link" to="/contact">
                Contacto
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/properties">
                Propiedades
              </Link>
            </li>

            {!user ? (
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/login" role="button">
                    Iniciar Sesion
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="nav-link">
                    Registrarse
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={`/profile/`} className="nav-link user">
                    {JSON.parse(user).name}
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link user"
                    to="/login"
                    onClick={logoutHandler}
                  >
                    Cerrar Sesion
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
