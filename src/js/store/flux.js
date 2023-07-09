const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			vehiculos: [],
			favoritos: []
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getPersonajes() {
				fetch("https://www.swapi.tech/api/people")
				.then(res => res.json())
				.then(data => {
					setStore({
						personajes: data.results
					})
				})
				.catch(error => {
					console.log(error);
				});
			},

			getPlanetas() {
				fetch("https://www.swapi.tech/api/planets")
				.then(res => res.json())
				.then(data => {
					setStore({
						planetas: data.results
					})
				})
				.catch(error => {
					console.log(error);
				});
			},

			getVehicles() {
				fetch("https://www.swapi.tech/api/vehicles")
				.then(res => res.json())
				.then(data => {
					setStore({
						vehiculos: data.results
					})
				})
				.catch(error => {
					console.log(error);
				});
			},

			async getDetailsPeople(uid){
				let response = await fetch("https://www.swapi.tech/api/people/" + uid )
				let data = await response.json()
				return data.result
			},

			async getDetailsPlanets(uid){
				let response = await fetch("https://www.swapi.tech/api/planets/" + uid )
				let data = await response.json()
				return data.result
			},

			async getDetailsVehicles(uid){
				let response = await fetch("https://www.swapi.tech/api/vehicles/" + uid )
				let data = await response.json()
				return data.result
			},

			addToFavorites: newItem => {

				const auxStore = getStore();
				
				console.log(auxStore.favorites.find(item => item.name == newItem.name))

				if (!auxStore.favorites.find(item => item.name == newItem.name)) {
					setStore({ favorites: [newItem, ...auxStore.favorites] });
				}

			},
			removeProductFromCart: targetProduct => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(items => items.id != targetProduct.id) });
			}
		}
	};
};

export default getState;
