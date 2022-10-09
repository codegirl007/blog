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
