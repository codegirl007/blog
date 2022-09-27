import React, { ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { mainTheme } from "./mainTheme/mainTheme";

type Props = {
	children: ReactNode;
};

export const StylesProviders = (props: Props) => {
	return (
		<ThemeProvider theme={mainTheme}>
			<CssBaseline />
			{props.children}
		</ThemeProvider>
	);
};
