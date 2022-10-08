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
import { ArticleImage } from "../components/articleImage/ArticleImage";
import { CreateCommentInput } from "../components/comments/CreateCommentInput ";
import { CommentsList } from "../components/comments/CommentsList";
import { ContainerLoading } from "../components/loading/LoadingComponent";
import MDEditor from "@uiw/react-md-editor";

export const Styled = {
	DetailedArticleContainer: styled("div")({
		width: "76rem",
		marginRight: "2.4rem",
	}),
	ArticleCreationInfo: styled(ArticleCreationInfo)({
		margin: "2.4rem 0",
	}),
	DetailedArticleImage: styled("div")({
		objectFit: "cover",
		width: "100%",
		height: "50.4rem",
	}),
	Typography: styled(Typography)({
		"&:first-letter": {
			textTransform: "uppercase",
		},
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
	HorizontalLine: styled("hr")({
		backgroundColor: themeColors.greys.borderLight,
		border: "none",
		height: "0.1rem",
		margin: "2.4rem 0",
	}),
};

export const DetailedArticle = (): JSX.Element => {
	const { articleId } = useParams<string>();
	const { data: detailedArticleData, isLoading } = useQuery<DetailedArticleResponseType, Error>(["detailedArticle", articleId], () =>
		ApiRequests.getDetailedArticle(articleId)
	);
	const { data: articlesData } = useQuery<ArticleListResponseType, Error>("articles", ApiRequests.getArticles);
	const filteredArticlesData = articlesData?.items.filter((article) => article.articleId !== articleId);

	return (
		<ContainerLoading loading={isLoading}>
			<HBox sx={{ alignItems: "start", justifyContent: "space-between" }}>
				<Styled.DetailedArticleContainer>
					<Styled.Typography variant="h1">{detailedArticleData?.title}</Styled.Typography>
					{detailedArticleData && <Styled.ArticleCreationInfo article={detailedArticleData} />}
					<Styled.DetailedArticleImage>
						{detailedArticleData?.imageId && <ArticleImage imageId={detailedArticleData?.imageId} />}
					</Styled.DetailedArticleImage>
					<Typography variant="body1" sx={{ margin: "2.4rem 0" }}>
						<MDEditor.Markdown source={detailedArticleData?.content} linkTarget="_blank" />
					</Typography>
					<Styled.HorizontalLine />
					<CreateCommentInput articleId={articleId} commentsNumber={detailedArticleData?.comments.length} />
					{detailedArticleData && <CommentsList comments={detailedArticleData.comments} />}
				</Styled.DetailedArticleContainer>

				<Styled.AsideContainer>
					<Typography variant="h4">Related Articles</Typography>
					{filteredArticlesData?.map((article) => (
						<RelatedArticle key={article.articleId} title={article.title} perex={article.perex} articleId={article.articleId} />
					))}
				</Styled.AsideContainer>
			</HBox>
		</ContainerLoading>
	);
};
