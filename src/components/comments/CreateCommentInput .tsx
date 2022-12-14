import { TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { TenantInfoType } from "../../types/TenantInfoType";
import { ApiRequests } from "../../utils/ApiRequestsClass";

type Props = {
	articleId: string | undefined;
	commentsNumber: number | undefined;
};

type FormValues = {
	content: string;
};

export const CreateCommentInput = (props: Props): JSX.Element => {
	const { data: testingTenantInfo } = useQuery<TenantInfoType, Error>("tenantInfo", () =>
		ApiRequests.getTenant("e80ef34b-a391-4d56-bbdd-42bc334ff878")
	);
	const queryClient = useQueryClient();
	const { mutate: createCommentMutate } = useMutation("createComment", ApiRequests.createComment, {
		onSuccess: () => {
			queryClient.invalidateQueries("detailedArticle");
		},
	});

	const { register, handleSubmit, reset } = useForm<FormValues>({
		mode: "onBlur",
	});

	const onSubmit = (formData: FormValues): void => {
		if (testingTenantInfo && props.articleId) {
			createCommentMutate({
				articleId: props.articleId,
				author: testingTenantInfo?.name,
				content: formData.content,
			});
		}
		reset();
	};
	return (
		<>
			<Typography variant="h4">Comments&nbsp;({props.commentsNumber})</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					variant="outlined"
					autoFocus
					fullWidth
					type="text"
					placeholder="Join the discussion"
					{...register("content")}
					id="comment"
					sx={{ marginBottom: "2rem" }}
					autoComplete="off"
				/>
			</form>
		</>
	);
};
