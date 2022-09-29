import { createTheme } from "@mui/material";
import { baseline } from "./muiComponents/baseline";
import { button } from "./muiComponents/button";
import { textInput } from "./muiComponents/textInput";
import { palette } from "./palette";
import { typography } from "./typography";

export const mainTheme = createTheme({
	palette,
	typography,
	spacing: ["0rem", "1.2rem", "2.4rem", "3.6rem", "4.8rem", "6rem, 7.2rem, 8.4rem, 9.6rem, 10.8rem"],
	components: {
		...baseline,
		...textInput,
		...button,
	},
});
