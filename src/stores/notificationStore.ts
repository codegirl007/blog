import create from "zustand";
import { NotificationInfo } from "../types/NotificationInfoType";

type NotificationsStoreType = {
	notifications: NotificationInfo[];
	lastId: number;
};

const useStore = create<NotificationsStoreType>(() => ({
	notifications: [],
	lastId: 0,
}));

export const notificationStore = {
	showNotification: (notificationInfo: NotificationInfo): void => {
		const notifications = [notificationInfo, ...useStore.getState().notifications];
		useStore.setState({ notifications });
	},

	hideNotification: (notificationInfo: NotificationInfo): void => {
		const notifications = useStore.getState().notifications.filter((item) => item.id !== notificationInfo.id);
		useStore.setState({ notifications });
	},

	generateNewId: (): number => {
		const newId = useStore.getState().lastId + 1;
		useStore.setState({ lastId: newId });
		return newId;
	},
	useStore,
};
