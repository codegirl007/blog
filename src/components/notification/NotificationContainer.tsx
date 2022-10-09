import React, { ReactElement } from "react";
import shallow from "zustand/shallow";
import { styled } from "@mui/material/styles";
import { notificationStore } from "../../stores/notificationStore";
import { Notification } from "./Notification";

const Styled = {
	NotificationsContainer: styled("div")(({ theme }) => ({
		zIndex: theme.zIndex.snackbar,
		position: "absolute",
		right: "3.6rem",
		bottom: "3.6rem",
	})),
};

export const NotificationContainer = (): ReactElement => {
	const notifications = notificationStore.useStore((store) => store.notifications, shallow);

	return (
		<Styled.NotificationsContainer>
			{notifications.map((notification) => (
				<Notification notification={notification} key={notification.id} />
			))}
		</Styled.NotificationsContainer>
	);
};
