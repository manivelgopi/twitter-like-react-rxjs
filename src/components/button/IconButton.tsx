import { CSSProperties } from "react";
import './Button.scss';

interface IconButtonProbs {
    type: "button" | "submit" | "reset";
    style?: CSSProperties | undefined;
    onClick?: () => void;
    otherProps?: any[];
    className?: string;
    children: JSX.Element;
}

export default function IconButton(props: IconButtonProbs) {
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className={`btn btn-icon ${props.className} `}
            style={props.style}
            {...props.otherProps}
        >
            {props.children}
        </button>
    )


}