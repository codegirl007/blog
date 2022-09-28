import React from "react";
import { NavLink } from "react-router-dom";
import { CustomNavlinkButton } from "../CustomNavlinkButton";

export const UserNavigation = (): JSX.Element => {
	return (
		<>
			<NavLink to="/login">
				<CustomNavlinkButton>Login</CustomNavlinkButton>
			</NavLink>
		</>
	);
};
