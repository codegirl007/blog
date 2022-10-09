import { NotificationBehaviourEnum } from "../model/NotificationBehaviourEnum";
import { NotificationVariantEnum } from "../model/NotificationVariantEnum";
import { notificationStore } from "../stores/notificationStore";
import { NotificationInfo } from "../types/NotificationInfoType";

const AUTO_HIDE_DURATION_DEFAULT = 3000;

export const showNotification = (
	variant: NotificationVariantEnum,
	message: string,
	behaviour?: NotificationBehaviourEnum
): NotificationInfo => {
	let autoHideDuration: number | null;
	if (!behaviour) {
		behaviour = NotificationBehaviourEnum.HIDE_AUTO;
	}

	switch (behaviour) {
		case NotificationBehaviourEnum.HIDE_BY_USER:
			autoHideDuration = null;
			break;
		case NotificationBehaviourEnum.HIDE_AUTO:
			autoHideDuration = AUTO_HIDE_DURATION_DEFAULT;
			break;
		case NotificationBehaviourEnum.HIDE_NEVER:
			autoHideDuration = null;
			break;
	}

	const newId = notificationStore.generateNewId();
	const notificationInfo: NotificationInfo = {
		id: newId,
		message,
		variant,
		closeButton: variant === NotificationVariantEnum.ERROR,
	};
	notificationStore.showNotification(notificationInfo);

	if (autoHideDuration) {
		setTimeout(() => {
			hideNotification(notificationInfo);
		}, autoHideDuration);
	}
	return notificationInfo;
};

export const hideNotification = (notification: NotificationInfo): void => {
	notificationStore.hideNotification(notification);
};
