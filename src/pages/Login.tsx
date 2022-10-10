import React from "react";
import { styled } from "@mui/material/styles";
import { TextField, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Spacer } from "../styles/customComponents.tsx/Spacer";
import { LoginType } from "../types/LoginType";
import { useMutation } from "react-query";
import { ApiRequests } from "../utils/ApiRequestsClass";
import { useNavigate } from "react-router-dom";
import { ContainerLoading } from "../components/loading/LoadingComponent";

const Styled = {
	LoginPageContainer: styled("div")({
		width: "36.8rem",
		boxShadow: "0rem 1.6rem 4.8rem rgba(0, 0, 0, 0.175)",
		margin: "0 auto",
		padding: "3.2rem",
		borderRadius: "0.8rem",
	}),
};

export const Login = (): JSX.Element => {
	const navigate = useNavigate();
	const { mutate, isLoading } = useMutation(ApiRequests.authorize, {
		onSuccess: () => {
			navigate("/myArticles");
		},
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginType>({
		mode: "onChange",
	});

	const onSubmit = (formData: LoginType): void => {
		mutate({
			username: formData.username,
			password: formData.password,
		});
	};
	return (
		<ContainerLoading loading={isLoading}>
			<Styled.LoginPageContainer>
				<Typography variant="h3">Log In</Typography>
				<form onSubmit={handleSubmit(onSubmit)}>
					<TextField
						label="Email"
						variant="outlined"
						autoFocus
						autoComplete="off"
						fullWidth
						type="text"
						placeholder="me@example.com"
						{...register("username", {
							required: "Email is required",
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
						autoComplete="off"
						type="password"
						{...register("password", {
							required: "Password is required",
						})}
						error={Boolean(errors.password)}
						helperText={errors.password?.message}
						id="password"
						sx={{ marginBottom: "2rem" }}
					/>
					<div style={{ display: "flex" }}>
						<Spacer />
						<Button variant="contained" type="submit">
							Log In
						</Button>
					</div>
				</form>
			</Styled.LoginPageContainer>
		</ContainerLoading>
	);
};
