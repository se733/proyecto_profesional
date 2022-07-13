import React, { useEffect } from "react";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearch } from "../state/search";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useInput();
  const search = useSelector((state) => state.setSearch);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearch(name.value));
  };

  console.log(search);

  return (
    <>
      <div className="container littleMargin">

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              {...name}
              type="text"
              className="form-control"
              placeholder="What are you looking for?"
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
              <h1>Resultados de la busqueda:</h1>
      </div>
    </>
  );
};

export default Search;
