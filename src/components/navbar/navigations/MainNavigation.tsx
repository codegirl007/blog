import React from "react";
import { Logo } from "../Logo";
import { NavLink } from "react-router-dom";
import { CustomNavlinkButton } from "../CustomNavlinkButton";
import { styled } from "@mui/material/styles";

const Styled = {
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
			<NavLink to="/">
				<CustomNavlinkButton>Recent Articles</CustomNavlinkButton>
			</NavLink>
			<NavLink to="" onClick={(e) => e.preventDefault()}>
				<CustomNavlinkButton>About</CustomNavlinkButton>
			</NavLink>
		</Styled.MainNavContainer>
	);
};
