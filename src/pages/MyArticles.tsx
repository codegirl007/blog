import React from "react";
import { HBox } from "../styles/customComponents.tsx/HBox";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { MyArticlesDataGrid } from "../components/myArticles/MyArticlesDataGrid";

export const MyArticles = (): JSX.Element => {
	const navigate = useNavigate();

	return (
		<>
			<HBox sx={{ marginBottom: "4rem" }}>
				<Typography variant="h1">My Articles</Typography>
				<Button variant="contained" onClick={() => navigate("/myArticles/createArticle")}>
					Create new article
				</Button>
			</HBox>
			<MyArticlesDataGrid />
		</>
	);
};
