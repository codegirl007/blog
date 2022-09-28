import React from "react";
import { styled } from "@mui/material/styles";
import { themeColors } from "../../styles/mainTheme/themeColors";
import { MainNavigation } from "./navigations/MainNavigation";
import { UserNavigation } from "./navigations/UserNavigation";

const Styled = {
	NavBar: styled("div")({
		width: "100%",
		backgroundColor: themeColors.greys.lightGrey,
		position: "fixed",
		display: "flex",
		padding: "0 22.5rem",
		justifyContent: "space-between",
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
