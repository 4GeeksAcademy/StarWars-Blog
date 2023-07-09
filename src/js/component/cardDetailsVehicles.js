import React from "react";
import PropTypes from "prop-types";


export const CardDetailsVehicles = ({ vehiculo }) => {
    return (
        <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12 m-2 border p-0">
            {vehiculo.properties &&
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img className="img-fluid rounded-start" style={{height: "400px", width: "600px"}} alt="..." src={"https://starwars-visualguide.com/assets/img/vehicles/" + vehiculo.uid + ".jpg"} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title fs-2 text-center">{vehiculo.properties.name}</h5>
                                <p className="card-text text-center fs-5 mt-3 mx-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </div>
                        <div className="d-flex flex-inline justify-content-center m-3">
                            <div className="mx-3 text-center">
                                <h5>Model</h5>
                                <h6>{vehiculo.properties.model}</h6>
                            </div>
                            <div className=" text-center mx-3">
                                <h5>Manufacturer</h5>
                                <h6>{vehiculo.properties.manufacturer}</h6>
                            </div>
                            <div className=" text-center mx-3">
                                <h5>Length</h5>
                                <h6>{vehiculo.properties.length}</h6>
                            </div>
                            <div className=" text-center mx-3">
                                <h5>Cargo Capacity</h5>
                                <h6>{vehiculo.properties.cargo_capacity}</h6>
                            </div>
                            <div className=" text-center mx-3">
                                <h5>Passengers</h5>
                                <h6>{vehiculo.properties.passengers}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

CardDetailsVehicles.propTypes = {
    vehiculo: PropTypes.object
};