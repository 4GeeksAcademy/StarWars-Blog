import React from "react";
import PropTypes from "prop-types";


export const CardDetailsPeople = ({personaje}) => {
    return (
        <div className="col-lg-10 col-md-8 col-sm-10 col-xs-12 m-2 border p-0">
        {personaje.properties && 
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img className="img-fluid rounded-start" alt="..."  src="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{personaje.properties.name}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        }
        </div>
    )
}

CardDetailsPeople.propTypes = {
    personaje: PropTypes.object
};