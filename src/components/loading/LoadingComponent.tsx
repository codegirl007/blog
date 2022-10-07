import React, { ReactElement, ReactNode } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { styled, SxProps } from "@mui/material/styles";

const Styled = {
	Wrapper: styled("div")({
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		padding: 0,
	}),
	IconWrapper: styled("div")({
		position: "absolute",
		zIndex: 999,
		top: "50%",
		right: "50%",
		transform: "translate(-50%,-50%)",
	}),
	BlurringContainer: styled("div")({
		filter: "blur(0.3rem)",
		pointerEvents: "none",
		width: "100%",
	}),
};

type Props = {
	children?: ReactNode | undefined;
	loading?: boolean;
	sx?: SxProps;
};

export const ContainerLoading = (props: Props): ReactElement => {
	if (props.loading) {
		return (
			<Styled.Wrapper sx={props.sx}>
				<Styled.IconWrapper>
					<CircularProgress />
				</Styled.IconWrapper>
				<Styled.BlurringContainer>{props.children}</Styled.BlurringContainer>
			</Styled.Wrapper>
		);
	}
	return <>{props.children}</>;
};
