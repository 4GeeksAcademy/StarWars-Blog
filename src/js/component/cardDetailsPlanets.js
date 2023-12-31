import React from "react";
import PropTypes from "prop-types";


export const CardDetailsPlanets = ({ planeta }) => {
    return (
        <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12 m-2 border p-0">
            {planeta.properties &&
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img className="img-fluid rounded-start" style={{ height: "400px", width: "600px" }} alt="..." src={"https://starwars-visualguide.com/assets/img/planets/" + planeta.uid + ".jpg"} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title fs-2 text-center">{planeta.properties.name}</h5>
                                <p className="card-text text-center fs-5 mt-3 mx-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </div>
                        <div className="d-flex flex-inline  justify-content-center m-3">
                            <div className="mx-3 text-center">
                                <h5>Climate</h5>
                                <h6>{planeta.properties.climate}</h6>
                            </div>
                            <div className=" text-center mx-3">
                                <h5>Population</h5>
                                <h6>{planeta.properties.population}</h6>
                            </div>
                            <div className=" text-center mx-3">
                                <h5>Orbital Period</h5>
                                <h6>{planeta.properties.orbital_period}</h6>
                            </div>
                            <div className=" text-center mx-3">
                                <h5>Rotation Period</h5>
                                <h6>{planeta.properties.rotation_period}</h6>
                            </div>
                            <div className=" text-center mx-3">
                                <h5>Diameter</h5>
                                <h6>{planeta.properties.diameter}</h6>
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