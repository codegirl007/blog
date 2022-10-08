import React, { useState } from "react";
import { Comments } from "../../types/DetailedArticleResponseType";
import { styled } from "@mui/material/styles";
import { Typography, IconButton } from "@mui/material";
import { HBox } from "../../styles/customComponents.tsx/HBox";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { formatDistanceToNowStrict } from "date-fns";
import { themeColors } from "../../styles/mainTheme/themeColors";
import { useMutation, useQueryClient } from "react-query";
import { ApiRequests } from "../../utils/ApiRequestsClass";
import { showNotification } from "../../actions/notificationActions";
import { NotificationVariantEnum } from "../../model/NotificationVariantEnum";
import { NotificationBehaviourEnum } from "../../model/NotificationBehaviourEnum";

const Styled = {
	AuthorTypography: styled(Typography)({
		fontWeight: 700,
		marginRight: "1rem",
		"&:first-letter": {
			textTransform: "uppercase",
		},
	}),
	ContentContainer: styled("div")({
		margin: "0.8rem 0",
	}),
	VoteContainer: styled(IconButton)({
		color: themeColors.basic.body,
		width: "4rem",
		position: "relative",
		height: "2.4rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: "2.8rem",
		borderRadius: "0%",
		"&:after": {
			content: '""',
			backgroundColor: themeColors.greys.borderLight,
			position: "absolute",
			top: 0,
			right: 0,
			width: "0.1rem",
			height: "100%",
		},
	}),
	VoteError: styled(Typography)({
		color: themeColors.error.errorRed,
	}),
};

type Props = {
	comment: Comments;
};

export const Comment = (props: Props): JSX.Element => {
	const { comment } = props;

	const countTimeDistance = (date: string) => {
		const dateFormat = new Date(date);
		const localeDate = new Date(dateFormat.getTime() - dateFormat.getTimezoneOffset() * 60 * 1000);
		const timeDistance = formatDistanceToNowStrict(localeDate);
		return timeDistance;
	};

	const queryClient = useQueryClient();
	const { mutate: upVoteCommentMutate } = useMutation("upvoteComment", ApiRequests.upvoteComment, {
		onSuccess: () => {
			queryClient.invalidateQueries("detailedArticle");
		},
	});
	const { mutate: downVoteCommentMutate } = useMutation("downvoteComment", ApiRequests.downvoteComment, {
		onSuccess: () => {
			queryClient.invalidateQueries("detailedArticle");
		},
	});

	const onUpVoteComments = (commentId: string): void => {
		if (comment.score === 0) {
			upVoteCommentMutate(commentId);
			showNotification(NotificationVariantEnum.SUCCESS, "You voted successfully!", NotificationBehaviourEnum.HIDE_AUTO);
		} else {
			showNotification(NotificationVariantEnum.ERROR, "Unfortunately you have only one vote!", NotificationBehaviourEnum.HIDE_AUTO);
		}
	};

	const onDownVoteComments = (commentId: string): void => {
		if (comment.score === 0) {
			downVoteCommentMutate(commentId);
			showNotification(NotificationVariantEnum.SUCCESS, "You voted successfully!", NotificationBehaviourEnum.HIDE_AUTO);
		} else {
			showNotification(NotificationVariantEnum.ERROR, "Unfortunately you have only one vote!", NotificationBehaviourEnum.HIDE_AUTO);
		}
	};

	return (
		<>
			<HBox sx={{ alignItems: "baseline" }}>
				<Styled.AuthorTypography variant="h6">{comment.author}</Styled.AuthorTypography>
				<Typography variant="body2" color="secondary">
					{countTimeDistance(comment.createdAt)} ago
				</Typography>
			</HBox>
			<Styled.ContentContainer>{comment.content}</Styled.ContentContainer>
			<HBox>
				<Styled.VoteContainer>
					<Typography variant="body2">{comment.score}</Typography>
				</Styled.VoteContainer>
				<Styled.VoteContainer onClick={() => onUpVoteComments(comment.commentId)}>
					<KeyboardArrowUpIcon />
				</Styled.VoteContainer>
				<Styled.VoteContainer onClick={() => onDownVoteComments(comment.commentId)}>
					<KeyboardArrowDownIcon />
				</Styled.VoteContainer>
			</HBox>
		</>
	);
};
