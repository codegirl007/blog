import React, { useState } from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { ContainerLoading } from "../loading/LoadingComponent";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { ArticleListResponseType } from "../../types/ArticleListResponseType";
import { ApiRequests } from "../../utils/ApiRequestsClass";
import { authStore } from "../../stores/authStore";
import shallow from "zustand/shallow";
import { IconButton } from "@mui/material";
import { EditIcon } from "../../styles/icons/EditIcon";
import { RemoveIcon } from "../../styles/icons/RemoveIcon";
import { useNavigate } from "react-router-dom";
import { showNotification } from "../../actions/notificationActions";
import { NotificationVariantEnum } from "../../model/NotificationVariantEnum";
import { NotificationBehaviourEnum } from "../../model/NotificationBehaviourEnum";
import { RenderCommentsNumber } from "./RenderCommentsNumber";
import Stack from "@mui/material/Stack";

export const MyArticlesDataGrid = (): JSX.Element => {
	const userName = authStore.useStore((state) => state.userName, shallow);
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const [articleId, setArticleId] = useState("");

	const { data, isFetching, isLoading } = useQuery<ArticleListResponseType, Error>("articles", ApiRequests.getArticles, {
		refetchOnWindowFocus: false,
	});

	const { mutate } = useMutation("deleteArticle", (id: string) => ApiRequests.deleteArticle(id), {
		onSuccess: () => {
			queryClient.invalidateQueries("articles");
			showNotification(
				NotificationVariantEnum.SUCCESS,
				"Your article was successfully deleted!",
				NotificationBehaviourEnum.HIDE_AUTO
			);
		},
	});

	const deleteArticle = (id: string) => {
		if (id) {
			setArticleId(id);
			mutate(id);
		}
	};

	const columns: GridColDef[] = [
		{ field: "articleId", headerName: "ArticleId", flex: 1 },
		{ field: "title", headerName: "Article title", flex: 1, maxWidth: 190 },
		{
			field: "perex",
			headerName: "Perex",
			flex: 1,
			minWidth: 450,
		},
		{
			field: "author",
			headerName: "Author",
			renderCell: () => <>{userName}</>,
			flex: 1,
			maxWidth: 1200,
		},
		{
			field: "comments",
			headerName: "# of comments",
			renderCell: (params: GridRenderCellParams) => {
				if (params.id !== articleId) {
					return <RenderCommentsNumber articleId={String(params.id)} />;
				}
			},
			flex: 1,
			maxWidth: 150,
		},
		{
			field: "actions",
			headerName: "Actions",
			sortable: false,
			renderCell: (params: GridRenderCellParams) => (
				<>
					<IconButton onClick={() => navigate(`editArticle/${params.id}`)}>
						<EditIcon />
					</IconButton>
					<IconButton onClick={() => deleteArticle(String(params.id))}>
						<RemoveIcon />
					</IconButton>
				</>
			),
			flex: 1,
			maxWidth: 100,
		},
	];

	return (
		<ContainerLoading loading={isLoading || isFetching}>
			{data && (
				<DataGrid
					rows={data.items}
					columns={columns}
					getRowId={(row) => row.articleId}
					checkboxSelection
					columnVisibilityModel={{
						articleId: false,
					}}
					components={{
						NoRowsOverlay: () => (
							<Stack height="100%" alignItems="center" justifyContent="center">
								You have no articles to display
							</Stack>
						),
					}}
					hideFooter
					autoHeight
					disableColumnMenu
					sx={{ width: "100%", height: "90%" }}
				/>
			)}
		</ContainerLoading>
	);
};
