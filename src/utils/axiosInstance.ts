import axios from "axios";
import { Constants } from "../model/Constants";

export const axiosInstance = axios.create({
	baseURL: `${Constants.SERVER_ENDPOINT}`,
	headers: {
		"Content-Type": "application/json",
		"X-API-KEY": "8940d2ad-84ee-4363-8319-f77fe3764242",
	},
});
