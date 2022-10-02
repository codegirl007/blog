import React from "react";
import { styled } from "@mui/material/styles";
import { NavLink, NavLinkProps } from "react-router-dom";
import { themeColors } from "../mainTheme/themeColors";
import { imageStore } from "../../stores/imageStore";

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
	}),
};

export const CustomNavLink = (props: NavLinkProps): JSX.Element => {
	return (
		<Styled.NavLink
			{...props}
			onClick={() => {
				imageStore.resetImage();
			}}
		>
			{props.children}
		</Styled.NavLink>
	);
};
