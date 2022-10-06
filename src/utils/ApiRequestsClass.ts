import { authStore } from "../stores/authStore";
import { CommentRequestType } from "../types/CommentRequestType";
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

	static getDetailedArticle = async (id: string | undefined) => {
		const response = await axiosInstance({
			method: "GET",
			url: `articles/${id}`,
		});
		return response.data;
	};

	static createNewArticle = async (newArticleData: NewArticleType) => {
		const response = await axiosInstance({
			method: "POST",
			url: "articles",
			data: newArticleData,
		});
		return response.data;
	};

	static editArticle = async (newArticleData: NewArticleType) => {
		const response = await axiosInstance({
			method: "PATCH",
			url: `articles/${newArticleData.articleId}`,
			data: newArticleData,
		});
		return response;
	};

	static deleteArticle = async (id: string) => {
		const response = await axiosInstance({
			method: "DELETE",
			url: `articles/${id}`,
		});
		return response;
	};

	static uploadImage = async (newImage: FormData) => {
		const response = await axiosInstance({
			method: "POST",
			url: "images",
			data: newImage,
		});
		return response.data;
	};

	static getImageData = async (imageId: string) => {
		const response = await axiosInstance({
			method: "GET",
			url: `images/${imageId}`,
			responseType: "blob",
		});
		return response;
	};

	static deleteImageData = async (imageId: string) => {
		const response = await axiosInstance({
			method: "DELETE",
			url: `images/${imageId}`,
		});
		return response;
	};

	static createComment = async (newComment: CommentRequestType) => {
		const response = await axiosInstance({
			method: "POST",
			url: "comments",
			data: newComment,
		});
		return response.data;
	};

	static upvoteComment = async (commentId: string) => {
		const response = await axiosInstance({
			method: "POST",
			url: `comments/${commentId}/vote/up`,
		});
		return response;
	};

	static downvoteComment = async (commentId: string) => {
		const response = await axiosInstance({
			method: "POST",
			url: `comments/${commentId}/vote/down`,
		});
		return response;
	};

	static authorize = async (loginData: LoginType) => {
		const { data } = await axiosInstance({
			method: "POST",
			url: "login",
			data: loginData,
		});
		authStore.addToken(data.access_token);
		authStore.logInUser();
		authStore.addUserName(loginData.username);
	};

	static getTenant = async (tenantId: string) => {
		const response = await axiosInstance({
			method: "GET",
			url: `tenants/${tenantId}`,
		});
		return response.data;
	};
}
