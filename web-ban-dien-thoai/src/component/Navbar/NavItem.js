import React, {useState} from "react";
import { ReactComponent as BellIcon } from '../../icons/bell.svg';
import { ReactComponent as MessengerIcon } from '../../icons/messenger.svg';
import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import './NavItem.scss'
export function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href={props.link} className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}