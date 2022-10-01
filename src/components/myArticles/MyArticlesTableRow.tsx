import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { ArticleType } from "../../types/ArticleType";
import { authStore } from "../../stores/authStore";
import shallow from "zustand/shallow";
import { HBox } from "../../styles/customComponents.tsx/HBox";
import { EditIcon } from "../../styles/icons/EditIcon";
import { RemoveIcon } from "../../styles/icons/RemoveIcon";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/styles";

const Styled = {
	Typography: styled(Typography)({
		fontSize: "1.6rem",
		fontWeight: 400,
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
		padding: "0 1.5rem",
	}),
};

type Props = {
	article: ArticleType;
};

export const MyArticlesTableRow = (props: Props): JSX.Element => {
	const { article } = props;
	const userName = authStore.useStore((state) => state.userName, shallow);
	return (
		<TableRow>
			<TableCell sx={{ maxWidth: "40rem" }}>
				<Styled.Typography>{article.title}</Styled.Typography>
			</TableCell>
			<TableCell sx={{ maxWidth: "50rem" }}>
				<Styled.Typography>{article.perex}</Styled.Typography>
			</TableCell>
			<TableCell sx={{ maxWidth: "50rem" }}>
				<Styled.Typography>{userName}</Styled.Typography>
			</TableCell>
			<TableCell>
				<Styled.Typography>100</Styled.Typography>
			</TableCell>
			<TableCell>
				<HBox>
					<IconButton>
						<EditIcon />
					</IconButton>
					<IconButton>
						<RemoveIcon />
					</IconButton>
				</HBox>
			</TableCell>
		</TableRow>
	);
};
