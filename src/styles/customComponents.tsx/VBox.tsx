import React, { ReactNode } from "react";
import { styled, SxProps } from "@mui/material/styles";

type Props = {
	children?: ReactNode | undefined;
	sx?: SxProps;
	onClick: () => void;
};

const Styled = {
	VerticalBox: styled("div")({
		display: "flex",
		flexDirection: "column",
	}),
};

export const VBox = (props: Props): JSX.Element => {
	return (
		<Styled.VerticalBox {...props} onClick={props.onClick}>
			{props.children}
		</Styled.VerticalBox>
	);
};
