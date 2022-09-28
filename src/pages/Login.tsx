import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const Styled = {
	LoginPageContainer: styled("div")({
		width: "36.8rem",
		backgroundColor: "red",
		boxShadow: "0rem 1.6rem 4.8rem rgba(0, 0, 0, 0.175)",
		margin: "0 auto",
		padding: "3.2rem",
	}),
};

export const Login = (): JSX.Element => {
	return (
		<Styled.LoginPageContainer>
			<Typography variant="h1">Log In</Typography>
		</Styled.LoginPageContainer>
	);
};
