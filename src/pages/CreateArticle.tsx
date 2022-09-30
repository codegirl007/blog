import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ApiRequests } from "../utils/ApiRequestsClass";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { NewArticleType } from "../types/NewArticleType";
import { styled } from "@mui/material/styles";
import { MarkDownEditor } from "../components/markdown/MarkDownEditor";
import { v4 as uuid } from "uuid";

export const Styled = {
	ArticlesContainer: styled("div")({
		width: "76rem",
	}),
	HeadingContainer: styled("div")({
		display: "flex",
		alignItems: "center",
		marginBottom: "4rem",
	}),
};

export const CreateArticle = (): JSX.Element => {
	const { mutate } = useMutation(ApiRequests.createNewArticle);
	const [markdownVal, setMarkdownVal] = useState("");
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<NewArticleType>({
		mode: "onChange",
	});

	const onSubmit = (formData: NewArticleType): void => {
		const uniqueId = uuid();
		mutate({
			articleId: uniqueId,
			title: formData.title,
			perex: markdownVal.substring(0, 500),
			imageId: uniqueId,
			content: markdownVal,
		});
		reset();
		setMarkdownVal("");
	};

	return (
		<Styled.ArticlesContainer>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Styled.HeadingContainer>
					<Typography variant="h1">Create new article</Typography>
					<Button variant="contained" type="submit">
						Publish Article
					</Button>
				</Styled.HeadingContainer>
				<TextField
					label="Article Title"
					variant="outlined"
					autoFocus
					fullWidth
					type="text"
					placeholder="My First Article"
					{...register("title", {
						required: "Title is required",
					})}
					error={Boolean(errors.title)}
					helperText={errors.title?.message}
					id="title"
					sx={{ marginBottom: "2rem" }}
				/>
				<Typography variant="h5">Featured image</Typography>
				<Button variant="contained" color="secondary" sx={{ marginBottom: "2rem" }}>
					Upload an Image
				</Button>
				<Typography variant="h5">Content</Typography>
				<MarkDownEditor markDownVal={markdownVal} setMarkDownVal={setMarkdownVal} />
			</form>
		</Styled.ArticlesContainer>
	);
};
