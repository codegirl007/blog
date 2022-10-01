import React from "react";
import { Table, TableCell, TableHead, TableRow } from "@mui/material";
import { useQuery } from "react-query";
import { ApiRequests } from "../../utils/ApiRequestsClass";
import { ArticleListResponseType } from "../../types/ArticleListResponseType";
import { MyArticlesTableRow } from "./MyArticlesTableRow";
import TableBody from "@mui/material/TableBody";

export const MyArticlesTable = (): JSX.Element => {
	const { data } = useQuery<ArticleListResponseType, Error>("articles", ApiRequests.getArticles);

	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell>Article title</TableCell>
					<TableCell>Perex</TableCell>
					<TableCell>Author</TableCell>
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
	);
};
