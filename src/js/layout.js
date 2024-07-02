import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Characters } from "./views/principal.jsx";
import { SpecificCharacter } from "./views/specificCharacter.jsx";
import { SpecificPlanet } from "./views/specificPlanet.jsx";
import injectContext from "./store/appContext";

import { StarshipDetails } from "./views/starshipDetails.jsx";

import { Navbar } from "./component/navbar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Characters />}/>
						<Route path="/demo/:id" element={<SpecificCharacter />} />
						<Route path="/demo2/:id" element={<SpecificPlanet />} />
						<Route path="/demo3/:id" element={<StarshipDetails />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);