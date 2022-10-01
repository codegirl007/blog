import React, { ReactNode } from "react";
import { styled, SxProps } from "@mui/material/styles";

type Props = {
	children?: ReactNode | undefined;
	sx?: SxProps;
};

const Styled = {
	HorizontalBox: styled("div")({
		display: "flex",
		alignItems: "center",
	}),
};

export const HBox = (props: Props): JSX.Element => {
	return <Styled.HorizontalBox {...props}>{props.children}</Styled.HorizontalBox>;
};
