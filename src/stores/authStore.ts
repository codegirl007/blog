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
	setAuthorized: () => useStore.setState({ authorized: true }),
	useStore,
};
