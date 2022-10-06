import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ApiRequests } from "../utils/ApiRequestsClass";
import { useMutation, useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { NewArticleType } from "../types/NewArticleType";
import { styled } from "@mui/material/styles";
import { MarkDownEditor } from "../components/markdown/MarkDownEditor";
import { HBox } from "../styles/customComponents.tsx/HBox";
import { useParams } from "react-router-dom";
import { DetailedArticleResponseType } from "../types/DetailedArticleResponseType";
import { ArticleImage } from "../components/articleImage/ArticleImage";
import { showNotification } from "../actions/notificationActions";
import { NotificationVariantEnum } from "../model/NotificationVariantEnum";
import { NotificationBehaviourEnum } from "../model/NotificationBehaviourEnum";

export const Styled = {
	ArticlesContainer: styled("div")({
		width: "76rem",
	}),
	ImageContainer: styled("div")({
		minWidth: "11.2rem",
		width: "11.2rem",
		height: "7.4rem",
		marginBottom: "0.8rem",
		objectFit: "cover",
	}),
};

export const EditArticle = (): JSX.Element => {
	const { articleId } = useParams<string>();
	const [imageId, setImageId] = useState("");
	const { data: detailedArticleData } = useQuery<DetailedArticleResponseType, Error>(
		"detailedArticle",
		() => ApiRequests.getDetailedArticle(articleId),
		{
			onSuccess: (data) => {
				setImageId(data.imageId);
			},
		}
	);
	const [markdownVal, setMarkdownVal] = useState("");
	const { mutate: editArticleMutate } = useMutation("editArticle", (data: NewArticleType) => ApiRequests.editArticle(data));
	const { mutate: uploadImageMutate } = useMutation("uploadImage", ApiRequests.uploadImage, {
		onSuccess: (data) => {
			data[0].imageId && setImageId(data[0].imageId);
			showNotification(
				NotificationVariantEnum.SUCCESS,
				"Your Image has been successfully deleted!",
				NotificationBehaviourEnum.HIDE_AUTO
			);
		},
		onError: () => {
			showNotification(NotificationVariantEnum.ERROR, "Unable to delete image!");
		},
	});
	const { mutate: deleteImageMutate } = useMutation("deleteImage", (id: string) => ApiRequests.deleteImageData(id), {
		onSuccess: () => {
			showNotification(
				NotificationVariantEnum.SUCCESS,
				"Your Image has been successfully deleted!",
				NotificationBehaviourEnum.HIDE_AUTO
			);
		},
		onError: () => {
			showNotification(NotificationVariantEnum.ERROR, "Unable to delete image!", NotificationBehaviourEnum.HIDE_AUTO);
		},
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
		if (articleId) {
			editArticleMutate({
				...formData,
				articleId: articleId,
				title: formData.title,
				imageId: imageId,
				content: markdownVal || "",
			});
		}
		reset();
		setImageId("");
	};

	const onImageUploadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target as HTMLInputElement;
		const file: File = (target.files as FileList)[0];
		const imageData = new FormData();
		imageData.append("image", file);
		uploadImageMutate(imageData);
	};

	useEffect(() => {
		if (detailedArticleData) {
			setMarkdownVal(detailedArticleData.content);
			reset({ title: detailedArticleData.title });
		}
	}, [detailedArticleData, reset]);

	return (
		<Styled.ArticlesContainer>
			<form onSubmit={handleSubmit(onSubmit)}>
				<HBox sx={{ marginBottom: "4rem" }}>
					<Typography variant="h1">Edit article</Typography>
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

				{imageId && (
					<Styled.ImageContainer>
						<ArticleImage imageId={imageId} />
					</Styled.ImageContainer>
				)}
				<HBox sx={{ marginBottom: "2rem" }}>
					<input
						accept="image/*"
						style={{ display: "none" }}
						id="button-file"
						multiple
						type="file"
						onChange={onImageUploadChange}
					/>
					<label htmlFor="button-file">
						<Button variant={imageId ? "text" : "contained"} component="span" color={imageId ? "primary" : "secondary"}>
							{imageId ? "Upload New" : "Upload an Image"}
						</Button>
					</label>
					{imageId && (
						<Button
							color="error"
							onClick={() => {
								deleteImageMutate(imageId);
								setImageId("");
							}}
						>
							Delete
						</Button>
					)}
				</HBox>
				<Typography variant="h5">Content</Typography>
				<MarkDownEditor markDownVal={markdownVal} setMarkDownVal={setMarkdownVal} />
			</form>
		</Styled.ArticlesContainer>
	);
};
