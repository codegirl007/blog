import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const rootElement = document.getElementById("app-root") as HTMLElement;
const root = createRoot(rootElement);
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</React.StrictMode>
);
