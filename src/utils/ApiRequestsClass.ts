import { authStore } from "../stores/authStore";
import { LoginType } from "../types/LoginType";
import { NewArticleType } from "../types/NewArticleType";
import { axiosInstance } from "./axiosInstance";

export class ApiRequests {
	static getArticles = async () => {
		const response = await axiosInstance({
			method: "GET",
			url: "articles",
		});
		return response.data;
	};

	static authorize = async (loginData: LoginType) => {
		const { data } = await axiosInstance({
			method: "POST",
			url: "login",
			data: loginData,
		});
		authStore.addToken(data.access_token);
		authStore.logInUser();
	};
	static createNewArticle = async (newArticleData: NewArticleType) => {
		const response = await axiosInstance({
			method: "POST",
			url: "articles",
			data: newArticleData,
		});
		return response.data;
	};
}
