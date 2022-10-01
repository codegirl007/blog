import React from "react";
import Typography from "@mui/material/Typography";
import { VBox } from "../../styles/customComponents.tsx/VBox";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export const Styled = {
	ArticlePerex: styled(Typography)({
		display: "-webkit-box",
		WebkitLineClamp: "3 !important",
		WebkitBoxOrient: "vertical",
		overflow: "hidden",
		textOverflow: "ellipsis",
		width: "100%",
		whiteSpace: "normal",
	}),
};

type Props = {
	title: string;
	perex: string;
	articleId: string;
};

export const RelatedArticle = (props: Props): JSX.Element => {
	return (
		<VBox sx={{ marginBottom: "2.4rem" }}>
			<Typography variant="h6" sx={{ fontWeight: 600 }}>
				{props.title}
			</Typography>
			<Styled.ArticlePerex variant="body1">{props.perex}</Styled.ArticlePerex>
		</VBox>
	);
};
