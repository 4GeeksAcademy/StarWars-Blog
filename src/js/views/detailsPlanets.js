import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { CardDetailsPlanets } from "../component/cardDetailsPlanets.js";
import { useParams } from "react-router";


export const DetailsPlanets = () => {

    const { store, actions } = useContext(Context);
    const params = useParams();

    const [planeta, setPlaneta] = useState({});

    const actualizarPlaneta = async () => {
        let idplaneta = await actions.getDetailsPlanets(params.uid);
        setPlaneta(idplaneta);
    }

    useEffect(() => {
        actualizarPlaneta();
    }, []);

    return(
        <div className="row dflex justify-content-center my-5">
            <CardDetailsPlanets planeta={planeta}/>
        </div>
    )
}