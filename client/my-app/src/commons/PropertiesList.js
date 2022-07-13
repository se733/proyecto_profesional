import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { defaultPropertiesRequest } from "../state/defaultProperties";

const PropertiesList = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.defaultProperties);

  useEffect(() => {
    dispatch(defaultPropertiesRequest());
  }, []);
  return (
    <>
      <div className="div_featured">
        {properties.map((propertie, i) => (
          <div className="card" style={{ width: "21rem" }}>
            <img
              src={propertie.image}
              className="card-c"
              alt={propertie.name}
            />
            <h5 class="card-title mt-5" key={i} propertie={propertie}>
              {propertie.name}
            </h5>
            <p class="card-text">{propertie.address}</p>
            <div class="card-body cards">
              <hr />
              <p class="card-text">${propertie.price}</p>
              <hr />
              <Link to={`properties-item/${propertie.id}`} class="btn btn-secondary">
                Visitar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PropertiesList;