import React, { useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";

type MarkDownEditorProps = {
	markDownVal: string;
	setMarkDownVal: any;
	setPlainText: any;
};

export const MarkDownEditor = (props: MarkDownEditorProps): JSX.Element => {
	useEffect(() => {
		const markDownText = document.querySelector(".w-md-editor-preview")?.textContent;
		props.setPlainText(markDownText);
	}, [props.markDownVal]);
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
			<MDEditor.Markdown source={props.markDownVal} style={{ display: "none" }} />
		</>
	);
};
