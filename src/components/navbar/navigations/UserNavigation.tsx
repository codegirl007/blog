import React from "react";
import { authStore } from "../../../stores/authStore";
import shallow from "zustand/shallow";
import { CustomNavLink } from "../../../styles/customComponents.tsx/CustomNavLink";

export const UserNavigation = (): JSX.Element => {
	const authorized = authStore.useStore((state) => state.authorized, shallow);

	const logoutUser = (): void => {
		authStore.logOutUser();
		authStore.addToken("");
	};
	return (
		<>
			{authorized ? (
				<div style={{ display: "flex" }}>
					<CustomNavLink to="/myArticles">My Articles</CustomNavLink>
					<CustomNavLink to="/myArticles/createArticle">Create Article</CustomNavLink>
					<CustomNavLink to="/login" onClick={logoutUser}>
						Logout
					</CustomNavLink>
				</div>
			) : (
				<CustomNavLink to="/login">Login</CustomNavLink>
			)}
		</>
	);
};
