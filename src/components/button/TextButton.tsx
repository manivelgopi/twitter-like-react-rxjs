import { CSSProperties } from "react";
import './Button.scss';

interface TextButtonProbs {
    type: "button" | "submit" | "reset";
    style?: CSSProperties | undefined;
    onClick?: () => void;
    otherProps?: any[];
    className?: string;
    children: string;
}

export default function TextButton(props: TextButtonProbs) {
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className={`btn btn-text ${props.className} `}
            style={props.style}
            {...props.otherProps}
        >
            {props.children}
        </button>
    )


}