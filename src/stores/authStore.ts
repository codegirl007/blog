import create from "zustand";
import { persist } from "zustand/middleware";
import { AuthStoreType } from "../types/AuthStoreType";

const useStore = create(
	persist<AuthStoreType>(
		() => ({
			token: "",
			authorized: false,
		}),
		{
			name: "auth",
			getStorage: () => localStorage,
		}
	)
);

export const authStore = {
	addToken: (newToken: string) => useStore.setState({ token: newToken }),
	logInUser: () => useStore.setState({ authorized: true }),
	logOutUser: () => useStore.setState({ authorized: false }),
	useStore,
};
