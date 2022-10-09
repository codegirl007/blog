import React from "react";
import { NavBar } from "./components/navbar/NavBar";
import { NotificationContainer } from "./components/notification/NotificationContainer";
import { AppRoutes } from "./routing/AppRoutes";
import { StylesProviders } from "./styles/StylesProviders";

export const App = (): JSX.Element => {
	return (
		<StylesProviders>
			<NavBar />
			<AppRoutes />
			<NotificationContainer />
		</StylesProviders>
	);
};
