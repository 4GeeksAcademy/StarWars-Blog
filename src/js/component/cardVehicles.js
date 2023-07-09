import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export const CardVehicles = (props) => {
  console.log(props.item)
    return (
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 m-2 border btn-light p-0">
          <img className="card-img-top" style={{height: "250px"}} alt="..." src={"https://starwars-visualguide.com/assets/img/vehicles/" + props.item.uid + ".jpg"} />
          <div className="card-body">
            <h5 className="card-title">{props.item.name}</h5>
            <Link to={"/details-vehicles/" + props.item.uid}>
              <button className="btn btn-primary">Leer más</button>
            </Link>
            <button type="button" className="btn btn-light float-end" onClick={() => actions.addToFavorites(props.item)}><i className="far fa-heart"></i></button>
          </div>
      </div>
    )
}

CardVehicles.propTypes = {
  item: PropTypes.object
};