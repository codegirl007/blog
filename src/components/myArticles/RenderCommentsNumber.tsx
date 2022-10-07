import React from "react";
import { useQuery } from "react-query";
import { DetailedArticleResponseType } from "../../types/DetailedArticleResponseType";
import { ApiRequests } from "../../utils/ApiRequestsClass";

type Props = {
	articleId: string;
};

export const RenderCommentsNumber = (props: Props): JSX.Element => {
	const { data: detailedArticleData } = useQuery<DetailedArticleResponseType, Error>(["detailedArticle", props.articleId], () =>
		ApiRequests.getDetailedArticle(props.articleId)
	);
	return <>{detailedArticleData?.comments.length}</>;
};
