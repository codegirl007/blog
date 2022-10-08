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
import { HBox } from "../styles/customComponents.tsx/HBox";
import { ArticleImage } from "../components/articleImage/ArticleImage";
import { NotificationBehaviourEnum } from "../model/NotificationBehaviourEnum";
import { NotificationVariantEnum } from "../model/NotificationVariantEnum";
import { showNotification } from "../actions/notificationActions";
import LoadingButton from "@mui/lab/LoadingButton";
import { ContainerLoading } from "../components/loading/LoadingComponent";

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

export const CreateArticle = (): JSX.Element => {
	const [markdownVal, setMarkdownVal] = useState("");
	const [plainText, setPlainText] = useState("");
	const [imageId, setImageId] = useState("");

	const { mutate: createArticleMutate, isLoading } = useMutation("createArticle", ApiRequests.createNewArticle, {
		onSuccess: () => {
			showNotification(
				NotificationVariantEnum.SUCCESS,
				"Your Article has been successfully published!",
				NotificationBehaviourEnum.HIDE_AUTO
			);
		},
	});

	const {
		data: imageIdData,
		mutate: uploadImageMutate,
		isLoading: isImageLoading,
	} = useMutation("uploadImage", ApiRequests.uploadImage, {
		onSuccess: (data) => {
			data[0].imageId && setImageId(data[0].imageId);
			showNotification(
				NotificationVariantEnum.SUCCESS,
				"Your Image has been successfully uploaded!",
				NotificationBehaviourEnum.HIDE_AUTO
			);
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
		const uniqueId = uuid();
		if (imageIdData && markdownVal) {
			createArticleMutate({
				articleId: uniqueId,
				title: formData.title,
				perex: plainText,
				imageId: imageIdData[0].imageId,
				content: markdownVal,
			});
			reset();
			setImageId("");
			setMarkdownVal("");
			setPlainText("");
		} else {
			showNotification(NotificationVariantEnum.ERROR, "Form is not complete!", NotificationBehaviourEnum.HIDE_AUTO);
		}
	};

	const onImageUploadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target as HTMLInputElement;
		const file: File = (target.files as FileList)[0];
		const imageData = new FormData();
		imageData.append("image", file);
		uploadImageMutate(imageData);
	};

	return (
		<ContainerLoading loading={isLoading}>
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
							<LoadingButton
								loading={isImageLoading}
								variant={imageId ? "text" : "contained"}
								component="span"
								color={imageId ? "primary" : "secondary"}
							>
								{imageId ? "Upload New" : "Upload an Image"}
							</LoadingButton>
						</label>
						{imageId && (
							<Button
								color="error"
								onClick={() => {
									setImageId("");
								}}
							>
								Delete
							</Button>
						)}
					</HBox>
					<Typography variant="h5">Content</Typography>
					<MarkDownEditor markDownVal={markdownVal} setMarkDownVal={setMarkdownVal} setPlainText={setPlainText} />
				</form>
			</Styled.ArticlesContainer>
		</ContainerLoading>
	);
};
