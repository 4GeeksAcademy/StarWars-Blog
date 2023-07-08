import React from "react";
import PropTypes from "prop-types";


export const CardDetailsPlanets = ({ planeta }) => {
    return (
        <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12 m-2 border p-0">
            {planeta.properties &&
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img className="img-fluid rounded-start" alt="..." src={"https://starwars-visualguide.com/assets/img/planets/" + planeta.uid + ".jpg"} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{planeta.properties.name}</h5>
                                <p className="card-text">{planeta.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

CardDetailsPlanets.propTypes = {
    planeta: PropTypes.object
};