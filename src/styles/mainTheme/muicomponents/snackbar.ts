import { ThemeOptions } from "@mui/material/styles/createTheme";
import { themeColors } from "../themeColors";

export const snackbar: ThemeOptions["components"] = {
	MuiSnackbarContent: {
		styleOverrides: {
			root: {
				backgroundColor: themeColors.basic.white,
				boxShadow: "0rem 1rem 2rem rgba(6, 61, 142, 0.1), 0rem 2rem 6rem rgba(6, 61, 142, 0.15);",
				height: "8.3rem",
				padding: 0,
				justifyContent: "space-between",
				width: "42rem",
				["@media (min-width:600px)"]: {
					minWidth: 0,
				},
				borderRadius: "0.4rem",
				overflow: "hidden",
			},
			message: {
				padding: 0,
				display: "flex",
				height: "100%",
				width: "auto",
			},
			action: {
				padding: 0,
				margin: 0,
				height: "100%",
				position: "relative",
				alignItems: "start",
			},
		},
	},
};
