export const dataGrid = {
	MuiDataGrid: {
		styleOverrides: {
			root: {
				"&:focus, &:focus-within": {
					outline: "unset",
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
			iconButtonContainer: {
				visibility: "visible !important",
			},
			sortIcon: {
				opacity: "1 !important",
			},
		},
	},
};
