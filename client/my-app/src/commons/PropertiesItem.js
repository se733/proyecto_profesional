import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { singlePropertiesRequest } from "../state/singleProperties";

const PropertiesItem = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const singlePropertie = useSelector((state) => state.singleProperties);

  useEffect(() => {
    dispatch(singlePropertiesRequest(id));
  }, []);

  return (
    <>
      <div class="container mt-5 border shadow p-4 prop_item">
        <div class="card-body">
          <div className="d-flex">

          <img
            src={singlePropertie.image}
            class="card-d"
            alt={singlePropertie.name}
          />
          
            <iframe
              width="450"
              height="250"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Monte%20Grande+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>{" "}
              </div>
            {/* <script
              type="text/javascript"
              src="https://embedmaps.com/google-maps-authorization/script.js?id=2c3f17ccb06fd8874843b69d557effdc0f81628a"
            ></script> */}
          
          <h5 class="card-title">{singlePropertie.name}</h5>
          <h6 class="card-title">{`$ ${singlePropertie.price}`}</h6>
          <p class="card-text">{singlePropertie.address}</p>
          <hr />
          <p class="card-text">{singlePropertie.description}</p>
          <Link to="#" class="btn btn-secondary">
            Reservar una visita
          </Link>
        </div>
      </div>
    </>
  );
};

export default PropertiesItem;
