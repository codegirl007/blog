import { ThemeOptions } from "@mui/material/styles/createTheme";

export const button: ThemeOptions["components"] = {
	MuiButtonBase: {
		defaultProps: {
			disableRipple: true,
		},
	},
	MuiButton: {
		defaultProps: {
			disableElevation: true,
		},
		styleOverrides: {
			root: {
				textTransform: "none",
				height: "4.6rem",
				fontWeight: 400,
				fontSize: "2rem",
				padding: "0.8rem 1.6rem",
				lineHeight: "initial",
			},
			sizeSmall: {
				height: "2.8rem",
				padding: "0.4rem 0.8rem",
				fontSize: "1.4rem",
			},
			sizeMedium: {
				height: "3.6rem",
				padding: "0.6rem 1.2rem",
				fontSize: "1.6rem",
			},
			startIcon: {
				marginRight: "0.5rem",
			},
			endIcon: {
				marginLeft: "0.5rem",
			},
		},
	},
};
