import { DetailedHTMLProps, HTMLAttributes} from "react";

import heartIcon from "@/assets/heart.svg";
import searchIcon from "@/assets/search.svg";

import cn from 'clsx';
import "./Navbar.scss";

interface INavbarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    dispatch?: () => void 
}

export const Navbar = ({dispatch, className, ...props}: INavbarProps) => {
    return (
        <nav className={cn("navbar__nav", className)} {...props}>
            <ul className="navbar__items">
                <li className="navbar__item" onClick={dispatch}>
                    <a href="#">проекты</a>
                </li>
                <li className="navbar__item" onClick={dispatch}>
                    <a href="#">новости</a>
                </li>
                <li className="navbar__item" onClick={dispatch}>
                    <a href="#">история</a>
                </li>
                <li className="navbar__item navbar__item_withIcon" onClick={dispatch}>
                    <a href="#">
                        <img src={heartIcon} alt="heart" />
                        <span>пожертвовать</span>
                    </a>
                </li>
                <li className="navbar__item navbar__item_withIcon" onClick={dispatch}>
                    <a href="#">
                        <img src={searchIcon} alt="search" />
                        <span>поиск</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
