import { useState } from "react";

import { Navbar } from "../navbar";
import { MobileMenu } from "./mobileMenu";

import searchIcon from "@/assets/search.svg";
import menuIcon from "@/assets/menu.svg";

import "./Header.scss";

export const Header = () => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <header className="header">
            <div className="header__container container">
                <h1 className="header__title">Мы помним</h1>
                <Navbar className="header__nav" />
                <div className="header__search">
                    <img src={searchIcon} alt="search" />
                </div>
                <div className="header__menu" onClick={() => setIsOpened(true)}>
                    <img src={menuIcon} alt="menu" />
                </div>
            </div>
            <MobileMenu isOpened={isOpened} setIsOpened={setIsOpened} />
        </header>
    );
};
