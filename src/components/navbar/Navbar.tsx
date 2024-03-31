import heartIcon from "@/assets/heart.svg";
import searchIcon from "@/assets/search.svg";

import "./Navbar.scss";

export const Navbar = () => {
    return (
        <nav className="navbar__nav">
            <ul className="navbar__items">
                <li className="navbar__item">
                    <a href="#">проекты</a>
                </li>
                <li className="navbar__item">
                    <a href="#">новости</a>
                </li>
                <li className="navbar__item">
                    <a href="#">история</a>
                </li>
                <li className="navbar__item navbar__item_withIcon">
                    <a href="#">
                        <img src={heartIcon} alt="heart" />
                        <span>пожертвовать</span>
                    </a>
                </li>
                <li className="navbar__item navbar__item_withIcon">
                    <a href="#">
                        <img src={searchIcon} alt="search" />
                        <span>поиск</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
