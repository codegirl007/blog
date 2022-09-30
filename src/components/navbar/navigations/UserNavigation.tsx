import React from "react";
import { authStore } from "../../../stores/authStore";
import { Styled } from "./MainNavigation";
import shallow from "zustand/shallow";

export const UserNavigation = (): JSX.Element => {
	const authorized = authStore.useStore((state) => state.authorized, shallow);

	const logoutUser = (): void => {
		authStore.logOutUser();
	};
	return (
		<>
			{authorized ? (
				<div style={{ display: "flex" }}>
					<Styled.NavLink to="/myArticles">My Articles</Styled.NavLink>
					<Styled.NavLink to="/createArticle">Create Article</Styled.NavLink>
					<Styled.NavLink to="/" onClick={logoutUser}>
						Logout
					</Styled.NavLink>
				</div>
			) : (
				<Styled.NavLink to="/login">Login</Styled.NavLink>
			)}
		</>
	);
};
