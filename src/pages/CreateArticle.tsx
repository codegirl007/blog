import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ApiRequests } from "../utils/ApiRequestsClass";
import { useMutation, useQueryClient } from "react-query";
import { useForm } from "react-hook-form";
import { NewArticleType } from "../types/NewArticleType";
import { styled } from "@mui/material/styles";
import { MarkDownEditor } from "../components/markdown/MarkDownEditor";
import { v4 as uuid } from "uuid";
import { HBox } from "../styles/customComponents.tsx/HBox";

export const Styled = {
	ArticlesContainer: styled("div")({
		width: "76rem",
	}),
};

export const CreateArticle = (): JSX.Element => {
	const [markdownVal, setMarkdownVal] = useState("");
	const { mutate: createArticleMutate } = useMutation("createArticle", ApiRequests.createNewArticle);
	const { data: imageIdData, mutate: uploadImageMutate } = useMutation("uploadImage", ApiRequests.uploadImage, {
		onSuccess: () => {},
	});

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
		createArticleMutate({
			articleId: uniqueId,
			title: formData.title,
			perex: markdownVal.substring(0, 500),
			imageId: imageIdData[0].imageId,
			content: markdownVal,
		});
		reset();
		setMarkdownVal("");
	};

	const onImageUploadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target as HTMLInputElement;
		const file: File = (target.files as FileList)[0];
		const imageData = new FormData();
		imageData.append("image", file);
		uploadImageMutate(imageData);
	};

	return (
		<Styled.ArticlesContainer>
			<form onSubmit={handleSubmit(onSubmit)}>
				<HBox sx={{ marginBottom: "4rem" }}>
					<Typography variant="h1">Create new article</Typography>
					<Button variant="contained" type="submit">
						Publish Article
					</Button>
				</HBox>
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
				<input accept="image/*" style={{ display: "none" }} id="button-file" multiple type="file" onChange={onImageUploadChange} />
				<label htmlFor="button-file">
					<Button variant="contained" component="span" color="secondary" sx={{ marginBottom: "2rem" }}>
						Upload an Image
					</Button>
				</label>
				<Typography variant="h5">Content</Typography>
				<MarkDownEditor markDownVal={markdownVal} setMarkDownVal={setMarkdownVal} />
			</form>
		</Styled.ArticlesContainer>
	);
};
