import React from "react";
import { Table, TableCell, TableHead, TableRow } from "@mui/material";
import { useQuery } from "react-query";
import { ApiRequests } from "../../utils/ApiRequestsClass";
import { ArticleListResponseType } from "../../types/ArticleListResponseType";
import { MyArticlesTableRow } from "./MyArticlesTableRow";
import TableBody from "@mui/material/TableBody";
import { ContainerLoading } from "../loading/LoadingComponent";

export const MyArticlesTable = (): JSX.Element => {
	const { data, isFetching, isLoading } = useQuery<ArticleListResponseType, Error>("articles", ApiRequests.getArticles, {
		refetchOnWindowFocus: false,
	});

	return (
		<ContainerLoading loading={isLoading || isFetching}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell sx={{ maxWidth: "40rem" }}>Article title</TableCell>
						<TableCell sx={{ maxWidth: "50rem" }}>Perex</TableCell>
						<TableCell sx={{ maxWidth: "50rem" }}>Author</TableCell>
						<TableCell># of comments</TableCell>
						<TableCell>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data?.items.map((article) => (
						<MyArticlesTableRow key={article.articleId} article={article} />
					))}
				</TableBody>
			</Table>
		</ContainerLoading>
	);
};
