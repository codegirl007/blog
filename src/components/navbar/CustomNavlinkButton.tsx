import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";

const Styled = {
	NavButton: styled("div")({
		height: "5.6rem",
		display: "flex",
		alignItems: "center",
		padding: "0 2rem",
	}),
};

type Props = {
	children: ReactNode;
};

export const CustomNavlinkButton = (props: Props): JSX.Element => {
	return <Styled.NavButton>{props.children}</Styled.NavButton>;
};
