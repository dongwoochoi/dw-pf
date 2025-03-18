import { ButtonHTMLAttributes } from "react";

export interface BaseTypes extends React.AllHTMLAttributes<T> {
	onChange?: React.ChangeEventHandler<T>;
	children?: React.ReactNode;
	style?: CSSProperties;
}

export interface TableStructure<T> {
	id: keyof T;
	index?: number;
	label?: string;
	headerType?: string;
	highlightKeyword?: string;
	columnStyle?: CSSProperties;
}

export interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
	css?: Interpolation<Theme>;
	customStyle?: string;
}
