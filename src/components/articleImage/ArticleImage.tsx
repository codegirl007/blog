import React, { useState } from "react";
import { useQuery } from "react-query";
import { ApiRequests } from "../../utils/ApiRequestsClass";

type Props = {
	imageId: string;
};

export const ArticleImage = (props: Props): JSX.Element => {
	const [imgSrc, setImgSrc] = useState<string>("");
	useQuery(
		`image${props.imageId}`,
		async () => {
			return ApiRequests.getImageData(props.imageId);
		},
		{
			onSuccess: (data) => {
				const getImage = async () => {
					const dat = URL.createObjectURL(data.data);
					setImgSrc(dat);
				};
				getImage();
			},
		}
	);

	return <img src={imgSrc} style={{ width: "100%" }} />;
};
