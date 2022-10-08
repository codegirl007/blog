import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { authStore } from "../../stores/authStore";
import { themeColors } from "../../styles/mainTheme/themeColors";
import shallow from "zustand/shallow";
import { ArticleType } from "../../types/ArticleType";
import { DetailedArticleResponseType } from "../../types/DetailedArticleResponseType";
import { DateConstants } from "../../model/Constants";
import { format } from "date-fns";
import { getLocaleTime } from "../../utils/countDateAndDifference";

export const Styled = {
	ArticleCreatingContainer: styled("div")({
		display: "flex",
		marginBottom: "1.2rem",
		alignItems: "center",
		gap: "1rem",
		color: themeColors.greys.muted,
	}),
};

type Props = {
	article: ArticleType | DetailedArticleResponseType;
};

export const ArticleCreationInfo = (props: Props): JSX.Element => {
	const userName = authStore.useStore((state) => state.userName, shallow);
	const localeTimeLastUpdate = getLocaleTime(props.article.lastUpdatedAt);

	return (
		<Styled.ArticleCreatingContainer {...props}>
			<Typography variant="body2">{userName}</Typography>
			&bull;
			<Typography variant="body2">{format(localeTimeLastUpdate, DateConstants.DATE_AND_YEAR)}</Typography>
		</Styled.ArticleCreatingContainer>
	);
};
