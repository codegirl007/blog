import React from "react";
import { styled } from "@mui/material/styles";
import { TextField, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Spacer } from "../styles/customComponents.tsx/Spacer";

const Styled = {
	LoginPageContainer: styled("div")({
		width: "36.8rem",
		boxShadow: "0rem 1.6rem 4.8rem rgba(0, 0, 0, 0.175)",
		margin: "0 auto",
		padding: "3.2rem",
	}),
};

type FormValues = {
	username: string;
	password: string;
};

export const Login = (): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		mode: "onChange",
	});

	const onSubmit = () => {
		undefined;
	};
	return (
		<Styled.LoginPageContainer>
			<Typography variant="h3">Log In</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					label="Email"
					variant="outlined"
					autoFocus
					fullWidth
					type="text"
					placeholder="me@example.com"
					{...register("username", {
						required: "Email is required",
						pattern: {
							value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
							message: "Please, write correct email format",
						},
					})}
					error={Boolean(errors.username)}
					helperText={errors.username?.message}
					id="email"
					sx={{ marginBottom: "2rem" }}
				/>
				<TextField
					label="Password"
					variant="outlined"
					fullWidth
					type="password"
					{...register("password", {
						required: "Email is required",
					})}
					error={Boolean(errors.password)}
					helperText={errors.password?.message}
					id="password"
				/>
				<div style={{ display: "flex" }}>
					<Spacer />
					<Button variant="contained">Log In</Button>
				</div>
			</form>
		</Styled.LoginPageContainer>
	);
};
