import { Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { ApiRequests } from "../utils/ApiRequestsClass";

export const RecentArticles = (): JSX.Element => {
	const { data, error, isError, isLoading } = useQuery("articles", ApiRequests.getArticles);
	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (isError) {
		//return <div>Error! {error.message}</div>;
	}

	return (
		<>
			<Typography variant="h1">Recent Articles</Typography>
		</>
	);
};
