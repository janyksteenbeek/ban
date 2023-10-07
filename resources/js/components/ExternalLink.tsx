import {Api} from "../services/Api";
import {MouseEvent, ReactNode} from "react";

export default function ExternalLink(props: { href: string; children?: ReactNode; [rest: string]: any; }) {
    const handleClick = async (e: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        await Api.shellLink(props.href);
    };

    return (
        <a href={props.href} onClick={handleClick} {...props.rest}>
            {props.children}
        </a>
    );
}
