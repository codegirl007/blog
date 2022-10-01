import { TypographyOptions } from "@mui/material/styles/createTypography";
import { themeColors } from "./themeColors";

export const typography: TypographyOptions = {
	fontFamily: "Helvetica",
	htmlFontSize: 10,
	fontWeightRegular: 400,
	h1: {
		fontSize: "4rem",
		fontWeight: 500,
		lineHeight: "4.8rem",
		marginRight: "3.2rem",
	},
	h2: {
		fontSize: "3.2rem",
		fontWeight: 500,
		lineHeight: "3.8rem",
	},
	h3: {
		fontSize: "2.8rem",
		fontWeight: 500,
		lineHeight: "3.2rem",
		marginBottom: "2.4rem",
		color: themeColors.basic.black,
	},
	h4: {
		fontSize: "2.4rem",
		fontWeight: 500,
		lineHeight: "2.8rem",
		marginBottom: "1.6rem",
	},
	h5: {
		fontSize: "1.4rem",
		fontWeight: 500,
		lineHeight: "2.4rem",
	},
	h6: {
		fontSize: "1.6rem",
		fontWeight: 500,
		lineHeight: "2rem",
		marginBottom: "0.8rem",
	},
	body1: {
		fontSize: "1.4rem",
		fontWeight: 400,
	},
	body2: {
		fontSize: "1.2rem",
		fontWeight: 400,
	},
};
