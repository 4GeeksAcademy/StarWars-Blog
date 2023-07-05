import React from "react";
import PropTypes from "prop-types";


export const CardPeople = (props) => {

    return (
        <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12 m-2 border p-0">
          <img className="card-img-top" alt="..." src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/05/darth-vader.jpeg?fit=1947%2C1274&quality=50&strip=all&ssl=1"/>
          <div className="card-body">
            <h5 className="card-title">{props.item.name}</h5>
            <p className="card-text">{props.item.birth_year}</p>
            <p className="card-text">{props.item.gender}</p>
            <p className="card-text">{props.item.films}</p>
            <button className="btn btn-primary">Leer más</button>
          </div>
      </div>
    )
}

CardPeople.propTypes = {
  item: PropTypes.object
};