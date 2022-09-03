import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import { editUserRequest, setUser } from "../state/user";

const Profile = () => {
  const dispatch = useDispatch();
  const email = useInput();
  const address = useInput();
  const user = localStorage.getItem("user");
  const [edit, setEdit] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editUserRequest({
        id: user.id,
        body: {
          email: email.value || user.email,
          address: address.value || user.address,
        },
      })
    )
      .then(() => dispatch(setUser()))
      .then(() => setEdit(false))
      .then(() => alert("Tus datos han sido actualizados."))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5 border shadow p-5">
      <form onSubmit={handlerSubmit}>
        <h4>Nombre:</h4>
        <h6>{JSON.parse(user).name}</h6>
        <h4>Apellido:</h4>
        <h6>{JSON.parse(user).lastName}</h6>
        <h4>Email:</h4>
        {edit ? (
          <div className="form-container">
            <input
              type="text"
              id="inputemail"
              placeholder="email@example.com"
              className="input input-email"
              {...email}
            />
          </div>
        ) : (
          <h6>{JSON.parse(user).email}</h6>
        )}
        {edit ? (
          <div className="form-container">
            <input
              type="text"
              id="inputemail"
              placeholder="Tu direccion"
              className="input input-email"
              {...address}
            />
          </div>
        ) : (
          <h6>
            {user.address ? user.address : "Aun no hay direcciones guardadas"}
          </h6>
        )}

        <input style={{ display: "none" }} />
        {edit && (
          <button type="submit" className="btn btn-success">
            Confirmar
          </button>
        )}
      </form>
      <div className="row mt-5">
        <div className="col">
          <button
            onClick={handleClick}
            type="submit"
            className="btn btn-secondary"
          >
            {edit ? "Atras" : "Editar"}
          </button>
        </div>
        <div className="col"></div>
      </div>
      <Link to="/profile/admin">
        <button class="btn btn-secondary text-white mt-3" type="submit">
          Ingresar como administrador
        </button>
      </Link>
    </div>
  );
};

export default Profile;
