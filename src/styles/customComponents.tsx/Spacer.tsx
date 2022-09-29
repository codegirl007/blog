import React, { ReactElement } from "react";
import { styled } from "@mui/material/styles";

const Styled = {
	Spacer: styled("div")({
		display: "flex",
		flex: "1 1 auto",
	}),
};

export const Spacer = (): ReactElement => {
	return <Styled.Spacer></Styled.Spacer>;
};
