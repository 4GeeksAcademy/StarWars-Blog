import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export const CardPlanets = (props) => {

    return (
        <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12 m-2 border p-0">
          <img className="card-img-top" alt="..." src={"https://starwars-visualguide.com/assets/img/planets/" + props.item.uid + ".jpg"} />
          <div className="card-body">
            <h5 className="card-title">{props.item.name}</h5>
            <p className="card-text">{props.item.climate}</p>
            <p className="card-text">{props.item.gravity}</p>
            <p className="card-text">{props.item.films}</p>
            <Link to={"/details-planets/" + props.item.uid}>
              <button className="btn btn-primary">Leer más</button>
            </Link>
          </div>
      </div>
    )
}

CardPlanets.propTypes = {
  item: PropTypes.object
};