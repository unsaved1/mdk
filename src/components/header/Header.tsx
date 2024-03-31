import { Navbar } from "../navbar";
import "./Header.scss";

export const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <h1 className="header__title">Мы помним</h1>
                <Navbar />
            </div>
        </header>
    );
};
