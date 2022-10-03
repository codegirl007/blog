import React from "react";
import { Comments } from "../../types/DetailedArticleResponseType";
import { Comment } from "./Comment";
import _ from "lodash";

type Props = {
	comments: Comments[];
};

export const CommentsList = (props: Props): JSX.Element => {
	const { comments } = props;
	const sortedComments = _.orderBy(comments, ["postedAt"], ["desc"]);
	return (
		<>
			{sortedComments.map((comment) => (
				<Comment comment={comment} key={comment.commentId} />
			))}
		</>
	);
};
