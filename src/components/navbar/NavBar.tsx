import React from "react";
import { styled } from "@mui/material/styles";
import { themeColors } from "../../styles/mainTheme/themeColors";
import { MainNavigation } from "./MainNavigation";
import { UserNavigation } from "./UserNavigation";

const Styled = {
	NavBar: styled("div")({
		width: "100%",
		height: "5.6rem",
		backgroundColor: themeColors.greys.lightGrey,
		position: "fixed",
		display: "flex",
		alignItems: "center",
		padding: "0 22.5rem",
	}),
};

export const NavBar = (): JSX.Element => {
	return (
		<Styled.NavBar>
			<MainNavigation />
			<UserNavigation />
		</Styled.NavBar>
	);
};
