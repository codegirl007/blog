import axios from "axios";
import { Constants } from "../model/Constants";
import { authStore } from "../stores/authStore";

const apiKey = process.env.REACT_APP_API_KEY ?? "";
const token = authStore.useStore.getState().token ?? "";

export const axiosInstance = axios.create({
	baseURL: `${Constants.SERVER_ENDPOINT}`,
	headers: {
		"Content-Type": "application/json",
		"X-API-KEY": apiKey,
		Authorization: token,
	},
});
