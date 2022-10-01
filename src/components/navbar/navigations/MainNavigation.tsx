import React from "react";
import { Logo } from "../Logo";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { themeColors } from "../../../styles/mainTheme/themeColors";
import { CustomNavLink } from "../../../styles/customComponents.tsx/CustomNavLink";

export const Styled = {
	MainNavContainer: styled("div")({
		height: "100%",
		display: "flex",
		alignItems: "center",
	}),
	NavLink: styled(NavLink)({
		textDecoration: "none",
		height: "5.6rem",
		display: "flex",
		alignItems: "center",
		padding: "0 2rem",
		color: themeColors.basic.body,
		"&:hover": {
			backgroundColor: themeColors.greys.borderLight,
		},
	}),
};

export const MainNavigation = (): JSX.Element => {
	return (
		<Styled.MainNavContainer>
			<Logo />
			<CustomNavLink to="/">Recent Articles</CustomNavLink>
			<CustomNavLink to="/about">About</CustomNavLink>
		</Styled.MainNavContainer>
	);
};
