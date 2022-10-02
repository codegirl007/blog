import axios from "axios";
import { ServerConstants } from "../model/Constants";
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
