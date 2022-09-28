import React from "react";
import { styled } from "@mui/material/styles";
import logo from "../../images/logo.jpg";

const Styled = {
	MainLogo: styled("img")({
		width: "3.2rem",
		height: "auto",
		margin: "auto 3.2rem auto 1.7rem",
	}),
};

export const Logo = (): JSX.Element => {
	return <Styled.MainLogo src={logo} alt="Cat logo image" />;
};
