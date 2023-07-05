import React from "react";
import PropTypes from "prop-types";


export const CardVehicles = (props) => {
  console.log(props.item)
    return (
        <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12 m-2 border p-0">
          <img className="card-img-top" alt="..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAun8TUTvdNpVOiNKJg-7N4Sp0zFRWp6Ma8w&usqp=CAU"/>
          <div className="card-body">
            <h5 className="card-title">{props.item.name}</h5>
            <p className="card-text">{props.item.model}</p>
            <p className="card-text">{props.item.films}</p>
            <button className="btn btn-primary">Leer más</button>
          </div>
      </div>
    )
}

CardVehicles.propTypes = {
  item: PropTypes.object
};