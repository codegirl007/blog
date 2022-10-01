import React from "react";
import Typography from "@mui/material/Typography";
import { ArticleListItemImage } from "./ArticleListItemImage";
import { styled } from "@mui/material/styles";
import { themeColors } from "../../styles/mainTheme/themeColors";
import { ArticleType } from "../../types/ArticleType";
import { ArticleCreationInfo } from "./ArticleCreationInfo";
import { NavLink } from "react-router-dom";
import { HBox } from "../../styles/customComponents.tsx/HBox";

export const Styled = {
	ArticleWrapper: styled("div")({
		display: "flex",
		marginBottom: "3.2rem",
	}),
	ContentContainer: styled("div")({
		width: "100%",
		padding: "0 2.4rem 2.4rem 2.4rem",
	}),
	ArticleCreatingContainer: styled("div")({
		display: "flex",
		marginBottom: "1.2rem",
		alignItems: "center",
		gap: "1rem",
		color: themeColors.greys.muted,
	}),
	ArticlePerex: styled(Typography)({
		display: "-webkit-box",
		WebkitLineClamp: "4 !important",
		WebkitBoxOrient: "vertical",
		overflow: "hidden",
		textOverflow: "ellipsis",
		width: "100%",
		whiteSpace: "normal",
	}),
	Typography: styled(Typography)({
		"&:first-letter": {
			textTransform: "uppercase",
		},
	}),
	NavLink: styled(NavLink)({
		textDecoration: "none",
		color: themeColors.primary.primaryBlue,
		fontSize: "1.4rem",
	}),
};

type Props = {
	article: ArticleType;
};

export const ArticleListItem = (props: Props): JSX.Element => {
	const { article } = props;

	return (
		<Styled.ArticleWrapper>
			<ArticleListItemImage />
			<Styled.ContentContainer>
				<Styled.Typography variant="h4">{article.title}</Styled.Typography>
				<ArticleCreationInfo article={article} />
				<Styled.ArticlePerex variant="body1">{article.perex}</Styled.ArticlePerex>
				<HBox sx={{ margin: "2rem 0" }}>
					<Styled.NavLink to={`/${article.articleId}`}>Read whole article</Styled.NavLink>
				</HBox>
			</Styled.ContentContainer>
		</Styled.ArticleWrapper>
	);
};
