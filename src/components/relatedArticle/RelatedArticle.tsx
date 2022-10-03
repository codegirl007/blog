import React from "react";
import Typography from "@mui/material/Typography";
import { VBox } from "../../styles/customComponents.tsx/VBox";
import { styled } from "@mui/material/styles";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { themeColors } from "../../styles/mainTheme/themeColors";

export const Styled = {
	ArticlePerex: styled(Typography)({
		display: "-webkit-box",
		WebkitLineClamp: "3 !important",
		WebkitBoxOrient: "vertical",
		overflow: "hidden",
		textOverflow: "ellipsis",
		width: "100%",
		whiteSpace: "normal",
		"&:first-letter": {
			textTransform: "uppercase",
		},
	}),
	Title: styled(Typography)({
		"&:first-letter": {
			textTransform: "uppercase",
		},
		fontWeight: 600,
	}),
	VBox: styled(VBox)({
		marginBottom: "2.4rem",
		cursor: "pointer",
		"&:hover": {
			backgroundColor: themeColors.greys.lightGrey,
		},
	}),
};

type Props = {
	title: string;
	perex: string;
	articleId: string;
};

export const RelatedArticle = (props: Props): JSX.Element => {
	const navigate = useNavigate();

	return (
		<Styled.VBox
			onClick={() => {
				navigate(`/${props.articleId}`);
			}}
		>
			<Styled.Title variant="h6">{props.title}</Styled.Title>
			<Styled.ArticlePerex variant="body1">{props.perex}</Styled.ArticlePerex>
		</Styled.VBox>
	);
};
