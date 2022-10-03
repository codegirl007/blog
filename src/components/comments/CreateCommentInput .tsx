import { TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { CommentDataType } from "../../types/CommentDataType";
import { TenantInfoType } from "../../types/TenantInfoType";
import { ApiRequests } from "../../utils/ApiRequestsClass";

type Props = {
	articleId: string | undefined;
};

export const CreateCommentInput = (props: Props): JSX.Element => {
	const { data: tenantInfo } = useQuery<TenantInfoType, Error>("tenantInfo", () =>
		ApiRequests.getTenant("e80ef34b-a391-4d56-bbdd-42bc334ff878")
	);
	const queryClient = useQueryClient();
	const { mutate: createCommentMutate } = useMutation("createComment", ApiRequests.createComment, {
		onSuccess: () => {
			queryClient.invalidateQueries("detailedArticle");
		},
	});
	const { register, handleSubmit, reset } = useForm({
		mode: "onBlur",
	});

	const onSubmit = (formData: any): void => {
		if (tenantInfo && props.articleId) {
			createCommentMutate({
				articleId: props.articleId,
				author: tenantInfo?.name,
				content: formData.content,
			});
		}
		reset();
	};
	return (
		<>
			<Typography variant="h4">Comments&nbsp;()</Typography>
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
				/>
			</form>
		</>
	);
};
