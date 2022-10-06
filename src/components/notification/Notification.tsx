import React, { ReactElement } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SnackbarContent from "@mui/material/SnackbarContent";
import { styled } from "@mui/material/styles";
import { NotificationVariantEnum } from "../../model/NotificationVariantEnum";
import { styledTransientPropsOptions } from "../../styles/styledTransientProps.Options";
import { NotificationInfo } from "../../types/NotificationInfoType";
import { SuccessIcon } from "../../styles/icons/SuccessIcon";
import { ProcessIcon } from "../../styles/icons/ProcessIcon";
import { ErrorIcon } from "../../styles/icons/ErrorIcon";
import CloseIcon from "@mui/icons-material/Close";
import { hideNotification } from "../../actions/notificationActions";
import { themeColors } from "../../styles/mainTheme/themeColors";

type SnackBarIconContainer = {
	$variant: NotificationVariantEnum;
};

const Styled = {
	SnackBarIconContainer: styled(
		"div",
		styledTransientPropsOptions
	)<SnackBarIconContainer>(({ theme }) => (props) => {
		const BACKGROUND_COLORS_TABLE = {
			[NotificationVariantEnum.ERROR]: theme.palette.error.light,
			[NotificationVariantEnum.SUCCESS]: theme.palette.success.light,
			[NotificationVariantEnum.PROCESSING]: theme.palette.warning.light,
		};
		return {
			backgroundColor: BACKGROUND_COLORS_TABLE[props.$variant] || "white",
			width: "4.8rem",
			minWidth: "4.8rem",
			height: "100%",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		};
	}),
	Message: styled(Typography)({
		overflow: "hidden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
	}),
	MessageContainer: styled("div")({
		padding: "1.6rem",
		display: "inline-block",
		flexDirection: "column",
		width: "33rem",
	}),
};

const VARIANT_ICON: Record<NotificationVariantEnum, ReactElement> = {
	[NotificationVariantEnum.SUCCESS]: <SuccessIcon />,
	[NotificationVariantEnum.PROCESSING]: <ProcessIcon />,
	[NotificationVariantEnum.ERROR]: <ErrorIcon />,
};

type Props = {
	notification: NotificationInfo;
};

export const Notification = (props: Props): ReactElement => {
	const onClose = (): void => {
		hideNotification(props.notification);
	};

	return (
		<SnackbarContent
			key={props.notification.id}
			message={
				<>
					<Styled.SnackBarIconContainer $variant={props.notification.variant}>
						{VARIANT_ICON[props.notification.variant]}
					</Styled.SnackBarIconContainer>
					<Styled.MessageContainer>
						<Styled.Message variant="body1" sx={{ color: themeColors.basic.black }}>
							{props.notification.message}
						</Styled.Message>
					</Styled.MessageContainer>
				</>
			}
			action={[
				<IconButton key="close" aria-label="Close" onClick={onClose} size="large">
					<CloseIcon sx={{ fontSize: "1.6rem" }} />
				</IconButton>,
			]}
			sx={{ marginTop: "1.6rem" }}
		/>
	);
};
