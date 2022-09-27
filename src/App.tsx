import React from "react";
import { NavBar } from "./components/navbar/NavBar";
import { StylesProviders } from "./styles/StylesProvider";

export const App = (): JSX.Element => {
	return (
		<StylesProviders>
			<NavBar />
		</StylesProviders>
	);
};
