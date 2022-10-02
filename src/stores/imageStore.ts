import create from "zustand";
import { persist } from "zustand/middleware";
import { ImageStoreType } from "../types/ImageStoretype";

const useStore = create(
	persist<ImageStoreType>(
		() => ({
			imageId: "",
			imageUploaded: false,
		}),
		{
			name: "image",
			getStorage: () => localStorage,
		}
	)
);

export const imageStore = {
	addImageId: (newImage: string) => useStore.setState({ imageId: newImage }),
	setImageUploaded: () => useStore.setState({ imageUploaded: true }),
	resetImage: () => useStore.setState({ imageId: "", imageUploaded: false }),
	useStore,
};
