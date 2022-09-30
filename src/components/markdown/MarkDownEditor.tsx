import React from "react";
import MDEditor from "@uiw/react-md-editor";

type MarkDownEditorProps = {
	markDownVal: string;
	setMarkDownVal: any;
};

export const MarkDownEditor = (props: MarkDownEditorProps): JSX.Element => {
	return (
		<>
			<MDEditor
				value={props.markDownVal}
				onChange={(value: any) => {
					props.setMarkDownVal(value);
				}}
				textareaProps={{
					placeholder: "Supports MarkDown. Yay!",
				}}
			/>
		</>
	);
};
