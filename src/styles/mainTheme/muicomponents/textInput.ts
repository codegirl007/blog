import { ThemeOptions } from "@mui/material/styles/createTheme";
import { themeColors } from "../themeColors";

declare module "@mui/material/TextField" {
	interface TextFieldPropsSizeOverrides {
		large: true;
	}
}
declare module "@mui/material/InputBase" {
	interface InputBasePropsSizeOverrides {
		large: true;
	}
}

export const textInput: ThemeOptions["components"] = {
	MuiInputBase: {
		defaultProps: { autoComplete: "off" },
		variants: [
			{
				props: { size: "large" },
				style: {
					height: "4.2rem",
					".MuiOutlinedInput-input, .MuiSelect-input": {
						fontSize: "1.5rem",
					},
				},
			},
			{
				props: { size: "medium" },
				style: {
					height: "3.6rem ",
					".MuiOutlinedInput-input, .MuiSelect-select": {
						fontSize: "1.4rem",
					},
				},
			},
			{
				props: { size: "small" },
				style: {
					height: "3rem ",
					".MuiOutlinedInput-input, .MuiSelect-select": {
						fontSize: "1.3rem",
					},
				},
			},
		],
		styleOverrides: {
			root: {
				width: "100%",

				borderRadius: "0.4rem",
				height: "3.6rem",
				".MuiSelect-select": {
					fontSize: "1.4rem",
					padding: "0 1.4rem",
				},
			},
			input: {
				fontWeight: 400,
				color: themeColors.basic.body,
				"&::placeholder": {
					opacity: 1,
					WebkitTextFillColor: themeColors.greys.muted,
				},
			},
		},
	},
	MuiTextField: {
		styleOverrides: {
			root: {
				".MuiOutlinedInput-root, .MuiFilledInput-root": {
					backgroundColor: themeColors.basic.white,
				},
			},
		},
	},
	MuiOutlinedInput: {
		defaultProps: { notched: false },
		styleOverrides: {
			root: {
				backgroundColor: themeColors.basic.white,
				"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
					border: `0.1rem solid ${themeColors.primary.primaryBlue}`,
					boxShadow: `0rem 0rem 0.6rem ${themeColors.primary.blueDropShadow}`,
				},
				"&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
					border: "none",
				},
				"&.Mui-error .MuiOutlinedInput-notchedOutline": {
					border: `0.1rem solid ${themeColors.error.errorRed}`,
					boxShadow: "none",
				},
			},
			notchedOutline: {
				border: `0.1rem solid ${themeColors.greys.borderLight}`,
			},
		},
	},

	MuiInputLabel: {
		defaultProps: { shrink: true },
		styleOverrides: {
			root: {
				fontSize: "1.4rem",
				fontWeight: 500,
				display: "flex",
				alignItems: "center",
				transform: "translate(0, -0.2rem)",
				color: themeColors.basic.black,

				"& ~ div": {
					marginTop: "2.2rem",
				},
			},
		},
	},
	MuiFormHelperText: {
		styleOverrides: {
			root: {
				fontSize: "1.2rem",
				fontWeight: 400,
				margin: "0.2rem auto 0 0",
				"&.Mui-error": {
					color: themeColors.error.errorRed,
				},
				maxWidth: "28rem",
				overflow: "hidden",
				whiteSpace: "nowrap",
				textOverflow: "ellipsis",
			},
		},
	},
};
