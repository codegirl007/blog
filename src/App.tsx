import React from "react";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/navbar/NavBar";
import { AppRoutes } from "./routing/AppRoutes";
import { StylesProviders } from "./styles/StylesProvider";

export const App = (): JSX.Element => {
	return (
		<StylesProviders>
			<BrowserRouter>
				<NavBar />
				<AppRoutes />
			</BrowserRouter>
		</StylesProviders>
	);
};
