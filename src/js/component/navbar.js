import React, { useContext } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store, actions} = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<img className="logo ms-4" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png" style={{height: "60px"}}/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
				<div className="container-fluid dropdown">
  					<button  type="button" className="btn btn-warning dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    					Favorites
  					</button>

  					{/* <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favorites.map((item, index) => {
							return(
   						<li key={index}>
							<span className="dropdown-item" onClick={() => actions.removeProductFromCart(item)}>
								{item.name}
							</span>
						</li>
					)})}
  					</ul> */}
			</div> 
				</Link>
			</div>
		</nav>
	);
};
