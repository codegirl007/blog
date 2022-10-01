import React, { ReactNode } from "react";
import { styled, SxProps } from "@mui/material/styles";

type Props = {
	children?: ReactNode | undefined;
	sx?: SxProps;
};

const Styled = {
	VerticalBox: styled("div")({
		display: "flex",
		flexDirection: "column",
	}),
};

export const VBox = (props: Props): JSX.Element => {
	return <Styled.VerticalBox {...props}>{props.children}</Styled.VerticalBox>;
};
