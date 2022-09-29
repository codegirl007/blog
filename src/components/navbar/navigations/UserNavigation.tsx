import React from "react";
import { Styled } from "./MainNavigation";

export const UserNavigation = (): JSX.Element => {
	return (
		<>
			<Styled.NavLink to="/login">Login</Styled.NavLink>
		</>
	);
};
