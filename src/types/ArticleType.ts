import { NewArticleType } from "./NewArticleType";

export type ArticleType = NewArticleType & {
	createdAt: string;
	lastUpdatedAt: string;
};
