import Typography from "@mui/material/Typography";
import React from "react";
import { ArticleType } from "../../types/ArticleType";
import { ArticleImage } from "./ArticleImage";
import { styled } from "@mui/material/styles";

export const Styled = {
	ArticleWrapper: styled("div")({
		display: "flex",
	}),
};

type Props = {
	article: ArticleType;
};

export const Article = (props: Props): JSX.Element => {
	const { article } = props;
	return (
		<Styled.ArticleWrapper>
			<ArticleImage />
			<Typography variant="h4">{article.title}</Typography>
			<Typography variant="body2">{article.createdAt}</Typography>
			<Typography variant="body1">{article.perex}</Typography>
		</Styled.ArticleWrapper>
	);
};
