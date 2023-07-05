import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardPeople } from "../component/cardPeople";
import { CardPlanets } from "../component/cardPlanets";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPersonajes();
		actions.getPlanetas();
		actions.getVehicles();
	}, []);
	
	return (

		<> 
			<div className="container">
				<h2>Personajes</h2>
				<hr></hr>
				<div className="row justify-content-center">
					{store.personajes.map((item, index) => (
						<CardPeople item={item} key={index} />
					))}
				</div>
			</div>

			<div className="container">
				<h2>Planetas</h2>
				<hr></hr>
				<div className="row justify-content-center">
					{store.planetas.map((item, index) => (
						<CardPlanets item={item} key={index} />
					))}
				</div>
			</div>

			<div className="container">
				<h2>Vehiculos</h2>
				<hr></hr>
				<div className="row justify-content-center">
					{store.vehiculos.map((item, index) => (
						<CardPlanets item={item} key={index} />
					))}
				</div>
			</div>
		</>
	
)};
