import { LoginType } from "../types/LoginType";
import { axiosInstance } from "../utils/axiosInstance";

export class ApiRequests {
	static getArticles = async (): Promise<void> => {
		const { data } = await axiosInstance({
			method: "GET",
			url: "articles",
		});
		return data;
	};

	static authorize = async (loginData: LoginType) => {
		const { data } = await axiosInstance({
			method: "POST",
			url: "login",
			data: loginData,
		});
		return data;
	};
}
