import { NotificationBehaviourEnum } from "../model/NotificationBehaviourEnum";
import { NotificationVariantEnum } from "../model/NotificationVariantEnum";
import { notificationStore } from "../stores/notificationStore";
import { NotificationInfo } from "../types/NotificationInfoType";

const AUTO_HIDE_DURATION_DEFAULT = 5000;

export const showNotification = (
	variant: NotificationVariantEnum,
	message: string,
	description?: string,
	behaviour?: NotificationBehaviourEnum
): NotificationInfo => {
	let autoHideDuration: number | null;
	let closeButton: boolean;
	if (!behaviour) {
		behaviour = variant === NotificationVariantEnum.ERROR ? NotificationBehaviourEnum.HIDE_NEVER : NotificationBehaviourEnum.HIDE_AUTO;
	}

	switch (behaviour) {
		case NotificationBehaviourEnum.HIDE_BY_USER:
			autoHideDuration = null;
			closeButton = true;
			break;
		case NotificationBehaviourEnum.HIDE_AUTO:
			autoHideDuration = AUTO_HIDE_DURATION_DEFAULT;
			closeButton = false;
			break;
		case NotificationBehaviourEnum.HIDE_NEVER:
			closeButton = false;
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
