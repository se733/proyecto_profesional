// import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { loginRequest, setUser } from "../state/user";

const Login = () => {
  const navigate = useNavigate();
  const email = useInput();
  const password = useInput();
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginRequest({ email: email.value, password: password.value }))
      // .then((res) => console.log(res))
      .then((res) => navigate("/home") & localStorage.setItem("user", JSON.stringify(res.payload)))
      // .then((user) => user ? navigate("/home") : alert("No has sido logueado"))
      // .then((user) => console.log(user))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form className="login" onSubmit={loginHandler}>
        <h2>Inicia Sesion con nosotros!</h2>
        <div class="mb-6">
          <label for="exampleInputEmail1" class="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...email}
          />
          {/* <div id="emailHelp" class="form-text">
            Nunca compartiremos su correo electrónico con nadie más.
          </div> */}
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Contraseña
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            {...password}
          />
        </div>
        {/* <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Verificado
          </label>
        </div> */}
        <button type="submit" className="btn btn-secondary">
          Iniciar Sesion
        </button>
      </form>
    </>
  );
};

export default Login;
