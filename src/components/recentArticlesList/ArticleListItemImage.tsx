import React from "react";
import { styled } from "@mui/material/styles";

const Styled = {
	ArticleImageContainer: styled("div")({
		minWidth: "27.2rem",
		width: "27.2rem",
		height: "24.4rem",
		backgroundColor: "yellow",
	}),
};

export const ArticleListItemImage = (): JSX.Element => {
	return <Styled.ArticleImageContainer></Styled.ArticleImageContainer>;
};
