import React, { useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { CardDetailsPeople } from "../component/cardDetailsPeople";
import { useParams } from "react-router";


export const DetailsPeople = () => {

    const { store, actions } = useContext(Context);
    const params = useParams();

    const [personaje, setPersonaje] = useState({});

    const actualizarPersonaje = async () => {
        let idpersonaje = await actions.getDetailsPeople(params.uid);
        setPersonaje(idpersonaje);
    }

    useEffect(() => {
        actualizarPersonaje();
    }, []);

    return (
       <>
            <CardDetailsPeople personaje ={personaje}/>
       </>
    )
}