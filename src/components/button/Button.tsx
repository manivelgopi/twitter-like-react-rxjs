import { CSSProperties } from "react";
import './Button.scss';

interface ButtonProbs {
    type: "button" | "submit" | "reset";
    style?: CSSProperties | undefined;
    onClick?: () => void;
    otherProps?: any[];
    className?: string;
    children: string;
    disabled?: boolean;
    testId?: string;
}

export default function Button(props: ButtonProbs) {
    return (
        <button
            data-testid={props.testId}
            disabled={props.disabled}
            type={props.type}
            onClick={props.onClick}
            className={`btn ${props.className} `}
            style={props.style}
            {...props.otherProps}
        >
            {props.children}
        </button>
    )


}