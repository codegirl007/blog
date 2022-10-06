import { ThemeOptions } from "@mui/material/styles/createTheme";
import { themeColors } from "../themeColors";

export const baseline: ThemeOptions["components"] = {
	MuiCssBaseline: {
		styleOverrides: {
			html: {
				fontSize: "62.5%",
				overflow: "hidden",
			},
			body: {
				fontSize: "1.6rem",
				margin: 0,
				backgroundColor: themeColors.basic.white,
			},
		},
	},
};
