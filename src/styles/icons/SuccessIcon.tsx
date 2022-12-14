import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { ReactElement } from "react";

export const SuccessIcon = React.forwardRef((props: SvgIconProps, ref: React.Ref<SVGSVGElement>): ReactElement => {
	return (
		<SvgIcon {...props} ref={ref} width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M23 12V11.1C23 10.5 22.6 10.1 22 10.1C21.4 10.1 21 10.5 21 11.1V12C21 17 17 21 12 21C7 21 3 17 3 12C3 7 7 3 12 3C13.3 3 14.5 3.3 15.7 3.8C16.2 4 16.8 3.8 17 3.3C17.2 2.8 17 2.2 16.5 2C15.1 1.3 13.5 1 12 1C5.9 1 1 5.9 1 12C1 18.1 5.9 23 12 23C18.1 23 23 18.1 23 12ZM22.3 2.3C22.7 1.9 23.3 1.9 23.7 2.3C24.1 2.7 24.1 3.3 23.7 3.7L12.7 14.7C12.5 14.9 12.2 15 12 15C11.8 15 11.5 14.9 11.3 14.7L8.3 11.7C7.9 11.3 7.9 10.7 8.3 10.3C8.7 9.9 9.3 9.9 9.7 10.3L12 12.6L22.3 2.3Z"
				fill="#212529"
			/>
			<mask id="mask0_5_2959" maskUnits="userSpaceOnUse" x="1" y="1" width="23" height="22">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M23 12V11.1C23 10.5 22.6 10.1 22 10.1C21.4 10.1 21 10.5 21 11.1V12C21 17 17 21 12 21C7 21 3 17 3 12C3 7 7 3 12 3C13.3 3 14.5 3.3 15.7 3.8C16.2 4 16.8 3.8 17 3.3C17.2 2.8 17 2.2 16.5 2C15.1 1.3 13.5 1 12 1C5.9 1 1 5.9 1 12C1 18.1 5.9 23 12 23C18.1 23 23 18.1 23 12ZM22.3 2.3C22.7 1.9 23.3 1.9 23.7 2.3C24.1 2.7 24.1 3.3 23.7 3.7L12.7 14.7C12.5 14.9 12.2 15 12 15C11.8 15 11.5 14.9 11.3 14.7L8.3 11.7C7.9 11.3 7.9 10.7 8.3 10.3C8.7 9.9 9.3 9.9 9.7 10.3L12 12.6L22.3 2.3Z"
					fill="white"
				/>
			</mask>
			<g mask="url(#mask0_5_2959)">
				<path fillRule="evenodd" clipRule="evenodd" d="M0 0H24V24H0V0Z" fill="#212529" />
			</g>
		</SvgIcon>
	);
});
