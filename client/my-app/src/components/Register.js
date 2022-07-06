import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
// import { loginRequest } from '../state/user'

const Register = () => {
  const navigate = useNavigate();

  const name = useInput();
  const lastName = useInput();
  const email = useInput();
  const password = useInput();

  const loginHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users/register", {
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      })
      .then(() => navigate("/login"))
      .catch((error) => console.log("Register/Axios error: ", error));
  };

  return (
    <>
      <form className="login" novalidate onSubmit={loginHandler}>
        <h2>Registrate ahora!</h2>
        <div className="mb-4">
          <label for="validationCustom02" class="form-label">
            Nombre
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            required
            {...name}
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
          <div class="valid-feedback">¡Se ve bien!</div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">
            Apellido
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            required
            {...lastName}
          />
        </div>
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label">
            Nombre de usuario
          </label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              class="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
              {...email}
            />
            <div class="invalid-feedback">
              Por favor, elije un nombre de usuario.
            </div>
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
        </div>

        <hr />

        <div class="col-12">
          <button class="btn btn-secondary" type="submit">
            Registrarme
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
