import { ArticleType } from "./ArticleType";

type Pagination = {
	offset: number;
	limit: number;
	total: number;
};

export type ArticleListResponseType = {
	items: ArticleType[];
	pagination: Pagination;
};
