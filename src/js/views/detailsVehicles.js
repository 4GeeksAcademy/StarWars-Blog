import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import { CardDetailsVehicles } from "../component/cardDetailsVehicles";

export const DetailsVehicles = () => {

    const { store, actions } = useContext(Context);
    const params = useParams();

    const [vehiculo, setVehiculo] = useState({});

    const actualizarVehicles = async () => {
        let idVehicles = await actions.getDetailsVehicles(params.uid);
        setVehiculo(idVehicles);
    }

    useEffect(() => {
        actualizarVehicles();
    }, []);

    return(
        <div className="row dflex justify-content-center my-5">
            <CardDetailsVehicles vehiculo={vehiculo}/>
        </div>
    )
}