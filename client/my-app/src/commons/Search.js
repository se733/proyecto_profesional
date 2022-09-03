import React from "react";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setSearch } from "../state/search";

const Search = () => {
  const dispatch = useDispatch();
  const name = useInput();
  const search = useSelector((state) => state.setSearch);

  console.log(search);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearch(name.value));
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="input-group search">
            <input
              {...name}
              type="text"
              className="form-control search_ "
              placeholder="¿Qué deseas buscar?"
              aria-label="Product"
              aria-describedby="input-group-button-right"
            />
            <button
              type="submit"
              className="btn btn-outline-secondary"
              id="input-group-button-right"
            >
              Search
            </button>
          </div>
        </form>
        <h1 className="search_result">Resultados de la busqueda:</h1>
      </div>
      <div className="div_featured">
        {search.map((searchs, i) => (
          <div className="card" style={{ width: "21rem" }}>
            <img src={searchs.image} className="card-c" alt={searchs.name} />
            <h5 class="card-title mt-5" key={i} searchs={searchs}>
              {searchs.name}
            </h5>
            <p class="card-text">{searchs.address}</p>
            <div class="card-body cards">
              <hr />
              <p class="card-text">${searchs.price}</p>
              <hr />
              <Link
                to={`/properties/properties-item/${searchs.id}`}
                class="btn btn-secondary"
              >
                Visitar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
