import { createTheme } from "@mui/material";
import { palette } from "./palette";
import { themeColors } from "./themeColors";
import { typography } from "./typography";

import type {} from "@mui/x-data-grid/themeAugmentation";

export const mainTheme = createTheme({
	palette,
	typography,
	spacing: ["0rem", "1.2rem", "2.4rem", "3.6rem", "4.8rem", "6rem, 7.2rem, 8.4rem, 9.6rem, 10.8rem"],
	components: {
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
		MuiInputBase: {
			defaultProps: { autoComplete: "off" },
			styleOverrides: {
				root: {
					width: "100%",
					borderRadius: "0.4rem",
					height: "3.6rem",
					"input:-webkit-autofill, input:-webkit-autofill:focus": {
						transition: "background-color 600000s 0s, color 600000s 0s",
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
			defaultProps: { autoComplete: "off" },
			styleOverrides: {
				root: {
					".MuiOutlinedInput-root, .MuiFilledInput-root": {
						backgroundColor: themeColors.basic.white,
					},
				},
			},
		},
		MuiOutlinedInput: {
			defaultProps: { notched: false, autoComplete: "off" },
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
		MuiTableHead: {
			styleOverrides: {
				root: {
					".MuiTableCell-root": {
						fontSize: "1.6rem",
						fontWeight: 700,
						whiteSpace: "wrap",
					},
				},
			},
		},
		MuiTableBody: {
			styleOverrides: {
				root: {
					".MuiTableCell-root": {
						fontSize: "1.6rem",
						fontWeight: 400,
					},
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					padding: "0 1.5rem",
					height: "2rem",
					borderBottom: "none",
				},
			},
		},
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
		MuiTooltip: {
			defaultProps: {
				placement: "top",
				arrow: true,
			},
			styleOverrides: {
				tooltip: {
					backgroundColor: themeColors.primary.primaryBlue,
					fontSize: "1.4rem",
					fontWeight: 400,
					padding: "0.8rem 1.2rem",
				},
				arrow: {
					color: themeColors.primary.primaryBlue,
					fontSize: "2rem",
					marginTop: "-1.35rem !important",
					marginBottom: "-1.35rem !important",
				},
			},
		},
		MuiDataGrid: {
			styleOverrides: {
				root: {
					"&:focus, &:focus-within": {
						outline: "unset",
					},
					".MuiDataGrid-iconButtonContainer": {
						visibility: "visible !important",
					},
				},
				columnHeader: {
					"&:focus, &:focus-within": {
						outline: "unset",
					},
				},
				columnHeaderTitle: {
					fontWeight: 700,
				},
				columnSeparator: {
					display: "none",
				},
				sortIcon: {
					opacity: "1 !important",
				},
			},
		},
	},
});
