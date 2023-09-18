import { CSSProperties } from "react";
import './Textarea.scss';

interface TextAreaProbs {
    style?: CSSProperties | undefined;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    otherProps?: any[];
    className?: string;
    children?: string;
    onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLElement>) => void;
    onPaste?: () => void;
    onCut?: () => void;
    value?: string;
    testId: string;
    placeHolder?: string;
}

export default function TextArea(props: TextAreaProbs) {
    return (
        <textarea
            data-testid={props.testId}
            value={props.value}
            onKeyDown={props.onKeyDown}
            onKeyUp={props.onKeyUp}
            onPaste={props.onPaste}
            onCut={props.onCut}
            style={props.style}
            {...props.otherProps}
            className={`input input-textarea ${props.className} `}
            onChange={props.onChange}
            placeholder={props.placeHolder}>
            {props.children}
        </textarea>

    )


}