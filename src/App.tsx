import React from "react";
import { NavBar } from "./components/navbar/NavBar";
import { NotificationContainer } from "./components/notification/NotificationContainer";
import { AppRoutes } from "./routing/AppRoutes";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { StylesProviders } from "./styles/StylesProviders";

const queryClient = new QueryClient();

export const App = (): JSX.Element => {
	return (
		<StylesProviders>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<NavBar />
					<AppRoutes />
					<NotificationContainer />
				</QueryClientProvider>
			</BrowserRouter>
		</StylesProviders>
	);
};
