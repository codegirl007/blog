import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { ReactElement } from "react";

export const ErrorIcon = React.forwardRef((props: SvgIconProps, ref: React.Ref<SVGSVGElement>): ReactElement => {
	return (
		<SvgIcon {...props} ref={ref} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1 12C1 18.1 5.9 23 12 23C18.1 23 23 18.1 23 12C23 5.9 18.1 1 12 1C5.9 1 1 5.9 1 12ZM3 12C3 7 7 3 12 3C17 3 21 7 21 12C21 17 17 21 12 21C7 21 3 17 3 12ZM13 12V8C13 7.4 12.6 7 12 7C11.4 7 11 7.4 11 8V12C11 12.6 11.4 13 12 13C12.6 13 13 12.6 13 12ZM12.7 16.7L12.7 16.7C12.5 16.9 12.3 17 11.9 17C11.6 17 11.4 16.9 11.2 16.7C11 16.5 10.9 16.3 10.9 16C10.9 15.8828 10.9343 15.8 10.9627 15.7314C10.9828 15.6828 11 15.6414 11 15.6C11 15.5 11.1 15.4 11.2 15.3C11.5 15 11.9 14.9 12.3 15.1C12.35 15.1 12.375 15.125 12.4 15.15C12.425 15.175 12.45 15.2 12.5 15.2C12.6 15.2 12.7 15.3 12.7 15.3C12.75 15.35 12.775 15.4 12.8 15.45C12.825 15.5 12.85 15.55 12.9 15.6C13 15.7 13 15.9 13 16C13 16.05 12.975 16.125 12.95 16.2C12.925 16.275 12.9 16.35 12.9 16.4C12.9 16.5 12.8 16.6 12.7 16.7Z"
				fill="#212529"
			/>
		</SvgIcon>
	);
});
