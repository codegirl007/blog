import { NotificationVariantEnum } from "../model/NotificationVariantEnum";

export type NotificationInfo = {
	id: number;
	message: string;
	closeButton: boolean;
	variant: NotificationVariantEnum;
};
