import React from "react";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { ApiRequests } from "../utils/ApiRequestsClass";
import { styled } from "@mui/material/styles";
import { ArticleCreationInfo } from "../components/recentArticlesList/ArticleCreationInfo";
import { DetailedArticleResponseType } from "../types/DetailedArticleResponseType";
import { HBox } from "../styles/customComponents.tsx/HBox";
import { themeColors } from "../styles/mainTheme/themeColors";
import { ArticleListResponseType } from "../types/ArticleListResponseType";
import { RelatedArticle } from "../components/relatedArticle/RelatedArticle";

export const Styled = {
	DetailedArticleContainer: styled("div")({
		width: "76rem",
		marginRight: "2.4rem",
	}),
	ArticleCreationInfo: styled(ArticleCreationInfo)({
		margin: "2.4rem 0",
	}),
	DetailedArticleImage: styled("div")({
		width: "100%",
		height: "50.4rem",
		backgroundColor: "yellow",
	}),
	Typography: styled(Typography)({
		textTransform: "capitalize",
	}),
	AsideContainer: styled("div")({
		width: "37.1rem",
		margin: "0 2.4rem",
		position: "relative",
		"&:before": {
			content: '""',
			backgroundColor: themeColors.greys.borderLight,
			position: "absolute",
			top: 0,
			left: "-2.4rem",
			width: "0.1rem",
			height: "100%",
		},
	}),
};

export const DetailedArticle = (): JSX.Element => {
	const { articleId } = useParams<string>();
	const { data, error, isLoading } = useQuery<DetailedArticleResponseType, Error>("detailedArticle", () =>
		ApiRequests.getDetailedArticle(articleId)
	);
	const { data: articlesData } = useQuery<ArticleListResponseType, Error>("articles", ApiRequests.getArticles);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <p>{error.message}</p>;
	}

	return (
		<HBox sx={{ alignItems: "start", justifyContent: "space-between" }}>
			<Styled.DetailedArticleContainer>
				<>
					<Styled.Typography variant="h1">{data?.title}</Styled.Typography>
					{data && <Styled.ArticleCreationInfo article={data} />}
					<Styled.DetailedArticleImage></Styled.DetailedArticleImage>
					<Typography variant="body1" sx={{ margin: "2.4rem 0" }}>
						{data?.content}
					</Typography>
				</>
			</Styled.DetailedArticleContainer>
			<Styled.AsideContainer>
				<Typography variant="h4">Related Articles</Typography>
				{articlesData?.items.map((article) => (
					<RelatedArticle key={article.articleId} title={article.title} perex={article.perex} />
				))}
			</Styled.AsideContainer>
		</HBox>
	);
};
