import React from "react";
import PropTypes from "prop-types";


export const CardDetailsPeople = ({ personaje }) => {
    return (
        <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12 m-2 border p-0">
            {personaje.properties &&
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img className="img-fluid rounded-start" style={{height: "400px", width: "600px"}} alt="..." src={"https://starwars-visualguide.com/assets/img/characters/" + personaje.uid + ".jpg"} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title fs-2 text-center">{personaje.properties.name}</h5>
                                <p className="card-text text-center fs-5 mt-3 mx-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </div>
                        <div className="d-flex flex-inline  justify-content-center m-3">
                            <div className="mx-4 text-center">
                                <h5>Birth Year</h5>
                                <h6>{personaje.properties.birth_year}</h6>
                            </div>
                            <div className=" text-center mx-4">
                                <h5>Hair Color</h5>
                                <h6>{personaje.properties.hair_color}</h6>
                            </div>
                            <div className=" text-center mx-4">
                                <h5>Height</h5>
                                <h6>{personaje.properties.height}</h6>
                            </div>
                            <div className=" text-center mx-4">
                                <h5>Mass</h5>
                                <h6>{personaje.properties.mass}</h6>
                            </div>
                            <div className=" text-center mx-4">
                                <h5>Gender</h5>
                                <h6>{personaje.properties.gender}</h6>
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