import { Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { ApiRequests } from "../utils/ApiRequestsClass";
import { styled } from "@mui/material/styles";
import _ from "lodash";
import { ArticleListItem } from "../components/recentArticlesList/ArticleListItem";
import { ContainerLoading } from "../components/loading/LoadingComponent";
import { AxiosError, AxiosResponse } from "axios";
import { showNotification } from "../actions/notificationActions";
import { NotificationVariantEnum } from "../model/NotificationVariantEnum";
import { NotificationBehaviourEnum } from "../model/NotificationBehaviourEnum";

export const Styled = {
	ArticlesContainer: styled("div")({
		width: "86rem",
	}),
};

export const RecentArticles = (): JSX.Element => {
	const { data, isLoading, error } = useQuery("articles", ApiRequests.getArticles, {
		onError: (error: AxiosError) => {
			const errorResponse = error.response as AxiosResponse;
			showNotification(
				NotificationVariantEnum.ERROR,
				`${errorResponse.data ? errorResponse.data.message : error.message}!`,
				NotificationBehaviourEnum.HIDE_AUTO
			);
		},
	});

	const sortedArticles = _.orderBy(data?.items, ["createdAt"], ["desc"]);

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
