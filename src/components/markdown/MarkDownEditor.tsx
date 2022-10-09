import React, { useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";

type MarkDownEditorProps = {
	markDownVal: string;
	setMarkDownVal: React.Dispatch<React.SetStateAction<string>>;
	setPlainText: React.Dispatch<React.SetStateAction<string>>;
};

export const MarkDownEditor = (props: MarkDownEditorProps): JSX.Element => {
	useEffect(() => {
		const markDownText = document.querySelector(".w-md-editor-preview")?.textContent;
		if (markDownText) {
			props.setPlainText(markDownText);
		}
	}, [props.markDownVal]);
	return (
		<>
			<MDEditor
				value={props.markDownVal}
				onChange={(value?: string) => {
					value && props.setMarkDownVal(value);
				}}
				textareaProps={{
					placeholder: "Supports MarkDown. Yay!",
				}}
			/>
			<MDEditor.Markdown source={props.markDownVal} style={{ display: "none" }} />
		</>
	);
};
