import { Typography } from "@mui/material";
import React from "react";
import { Comments } from "../../types/DetailedArticleResponseType";

type Props = {
	comment: Comments;
};

export const Comment = (props: Props): JSX.Element => {
	const { comment } = props;

	return (
		<>
			<Typography variant="h6">{comment.author}</Typography>
			<div>{comment.content}</div>
		</>
	);
};
