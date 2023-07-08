import React from "react";
import PropTypes from "prop-types";


export const CardDetailsPeople = ({ personaje }) => {
    return (
        <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12 m-2 border p-0">
            {personaje.properties &&
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img className="img-fluid rounded-start" alt="..." src={"https://starwars-visualguide.com/assets/img/characters/" + personaje.uid + ".jpg"} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{personaje.properties.name}</h5>
                                <p className="card-text">{personaje.description}</p>
                                <p className="card-text">{personaje.properties.birth_year}</p>
                                <p className="card-text">{personaje.properties.gender}</p>
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