import { Link } from "react-router-dom";
import './Button.scss';

interface LinkButtonProbs {
    icon?: string;
    img?: string;
    linkText?: string
    href: string;
    children: string;
    customstyle: string;
    targetBlank: string;
    className?: string;
    externalLink?: boolean;
    disabled?: boolean;
    otherProps: any[];

}

export default function LinkButton(props: LinkButtonProbs) {
    return !props.externalLink ? (
        <Link
            className={`btn link-button ${props.className}`}
            to={props.href}
            replace
            target={props.targetBlank && "_blank"}
            rel={props.targetBlank && "noopener noreferrer"}
            {...props.otherProps}
        >
            <span className="icon-container">
                {props.icon && props.icon}
                {props.img && <img src={props.img} alt="icon" />}
            </span>
            {props.linkText}
            {props.children}
        </Link>
    ) : (
        <a
            href={props.href}
            className={`button link-button ${props.className}`}
            target={props.targetBlank && "_blank"}
            rel={props.targetBlank && "noopener noreferrer"}
            {...props.otherProps}
        >
            <span className="icon-container">
                {props.icon && props.icon}
                {props.img && <img src={props.img} alt="icon" />}
            </span>
            {props.linkText}
            {props.children}
        </a>
    )

}