import create from "zustand";
import { persist } from "zustand/middleware";
import { AuthStoreType } from "../types/AuthStoreType";

const useStore = create(
	persist<AuthStoreType>(
		() => ({
			token: "",
			authorized: false,
			userName: "",
		}),
		{
			name: "auth",
			getStorage: () => localStorage,
		}
	)
);

export const authStore = {
	addToken: (newToken: string) => useStore.setState({ token: newToken }),
	addUserName: (newName: string) => useStore.setState({ userName: newName }),
	logInUser: () => useStore.setState({ authorized: true }),
	logOutUser: () => useStore.setState({ authorized: false }),
	useStore,
};
