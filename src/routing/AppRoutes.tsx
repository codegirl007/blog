import { styled } from "@mui/styles";
import React from "react";
import { Route, Routes } from "react-router";
import { DetailedArticle } from "../pages/DetailedArticle";
import { Login } from "../pages/Login";
import { RecentArticles } from "../pages/RecentArticles";

const Styled = {
	RoutesContainer: styled("div")({
		width: "100%",
		padding: "12rem 22.5rem",
	}),
};

export const AppRoutes = (): JSX.Element => {
	return (
		<Styled.RoutesContainer>
			<Routes>
				<Route path="/" element={<RecentArticles />} />
				<Route path="/articles/:articleId" element={<DetailedArticle />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Styled.RoutesContainer>
	);
};
