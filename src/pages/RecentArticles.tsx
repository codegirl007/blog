import { Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { ApiRequests } from "../utils/ApiRequestsClass";
import { styled } from "@mui/material/styles";
import _ from "lodash";
import { ArticleListResponseType } from "../types/ArticleListResponseType";
import { ArticleListItem } from "../components/recentArticlesList/ArticleListItem";

export const Styled = {
	ArticlesContainer: styled("div")({
		width: "86rem",
	}),
};

export const RecentArticles = (): JSX.Element => {
	const { data, error, isLoading } = useQuery<ArticleListResponseType, Error>("articles", ApiRequests.getArticles);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <p>{error.message}</p>;
	}

	const sortedArticles = _.orderBy(data?.items, ["createdAt"], ["desc"]);

	return (
		<>
			<Typography variant="h1" sx={{ marginBottom: "4rem" }}>
				Recent Articles
			</Typography>
			<Styled.ArticlesContainer>
				{sortedArticles.map((article) => (
					<ArticleListItem key={article.articleId} article={article} />
				))}
			</Styled.ArticlesContainer>
		</>
	);
};
