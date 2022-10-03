export type Comments = {
	articleId: string;
	author: string;
	content: string;
	postedAt: string;
	score: number;
	commentId: string;
};
export type DetailedArticleResponseType = {
	articleId: string;
	title: string;
	perex: string;
	imageId: string;
	content: string;
	createdAt: string;
	lastUpdatedAt: string;
	comments: Comments[];
};
