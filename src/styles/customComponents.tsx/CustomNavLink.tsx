import React from "react";
import { styled } from "@mui/material/styles";
import { NavLink, NavLinkProps } from "react-router-dom";
import { themeColors } from "../mainTheme/themeColors";

export const Styled = {
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
		"&:focus, &:active": {
			color: themeColors.primary.primaryBlue,
		},
	}),
};

export const CustomNavLink = (props: NavLinkProps): JSX.Element => {
	return <Styled.NavLink {...props}>{props.children}</Styled.NavLink>;
};
