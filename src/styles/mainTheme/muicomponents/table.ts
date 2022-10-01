import { ThemeOptions } from "@mui/material/styles/createTheme";

export const table: ThemeOptions["components"] = {
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
				padding: 0,
				height: "2rem",
				"&:first-letter": {
					textTransform: "uppercase",
				},
			},
		},
	},
};
