import { Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { ApiRequests } from "../utils/ApiRequestsClass";
import { styled } from "@mui/material/styles";
import _ from "lodash";
import { ArticleListItem } from "../components/recentArticlesList/ArticleListItem";
import { ContainerLoading } from "../components/loading/LoadingComponent";

export const Styled = {
	ArticlesContainer: styled("div")({
		width: "86rem",
	}),
};

export const RecentArticles = (): JSX.Element => {
	const { data, isLoading } = useQuery("articles", ApiRequests.getArticles);

	const sortedArticles = _.orderBy(data?.items, ["lastUpdatedAt"], ["desc"]);

	return (
		<>
			<ContainerLoading loading={isLoading}>
				<Typography variant="h1" sx={{ marginBottom: "4rem" }}>
					Recent Articles
				</Typography>
				<Styled.ArticlesContainer>
					{sortedArticles.map((article) => (
						<ArticleListItem key={article.articleId} article={article} />
					))}
				</Styled.ArticlesContainer>
			</ContainerLoading>
		</>
	);
};
