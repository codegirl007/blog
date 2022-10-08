import axios, { AxiosResponse } from "axios";
import { showNotification } from "../actions/notificationActions";
import { ServerConstants } from "../model/Constants";
import { NotificationBehaviourEnum } from "../model/NotificationBehaviourEnum";
import { NotificationVariantEnum } from "../model/NotificationVariantEnum";
import { authStore } from "../stores/authStore";

const apiKey = process.env.REACT_APP_API_KEY ?? "";
const token = authStore.useStore.getState().token ?? "";

export const axiosInstance = axios.create({
	baseURL: `${ServerConstants.SERVER_ENDPOINT}`,
	headers: {
		"X-API-KEY": apiKey,
		Authorization: token,
	},
});

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		const errorResponse = error.response as AxiosResponse;
		showNotification(
			NotificationVariantEnum.ERROR,
			`${errorResponse.data ? errorResponse.data.message : error.message}!`,
			NotificationBehaviourEnum.HIDE_AUTO
		);
	}
);
