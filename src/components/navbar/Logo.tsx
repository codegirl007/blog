import React from "react";
import { styled } from "@mui/material/styles";
import logo from "../../images/logo.jpg";

const Styled = {
	MainLogo: styled("img")({
		width: "3.2rem",
		height: "auto",
		margin: "1.6rem 0.9rem 1.6rem 1.7rem",
	}),
};

export const Logo = (): JSX.Element => {
	return <Styled.MainLogo src={logo} alt="Cat logo image" />;
};
