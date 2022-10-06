import React, { ReactElement, ReactNode } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";

const Styled = {
	Wrapper: styled("div")({
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		position: "relative",
		filter: "blur(0.3rem)",
		pointerEvents: "none",
	}),
	IconWrapper: styled("div")({
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",
	}),
	BlurringContainer: styled("div")({
		filter: "blur(0.3rem)",
		pointerEvents: "none",
	}),
};

type Props = {
	children?: ReactNode | undefined;
	loading?: boolean;
};

export const ContainerLoading = (props: Props): ReactElement => {
	if (props.loading) {
		return (
			<Styled.Wrapper>
				<Styled.BlurringContainer>{props.children}</Styled.BlurringContainer>
				<Styled.IconWrapper>
					<CircularProgress />
				</Styled.IconWrapper>
			</Styled.Wrapper>
		);
	}
	return <>{props.children}</>;
};
