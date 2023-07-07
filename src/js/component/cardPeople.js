import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CardPeople = (props) => {

    return (
        <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12 m-2 border p-0">
          <img className="card-img-top" alt="..." src={"https://starwars-visualguide.com/assets/img/characters/" + props.item.uid + ".jpg"}  />
          <div className="card-body">
            <h5 className="card-title">{props.item.name}</h5>
            <p className="card-text">{props.item.birth_year}</p>
            <p className="card-text">{props.item.gender}</p>
            <p className="card-text">{props.item.films}</p>
            <Link to={"/details-people/" + props.item.uid}>
              <button className="btn btn-primary">Leer más</button>
            </Link>
          </div>
      </div>
    )
}

CardPeople.propTypes = {
  item: PropTypes.object
};