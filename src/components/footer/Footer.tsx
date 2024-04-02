import { Navbar } from "../navbar";

import phoneIcon from "@/assets/phone.svg";
import youtubeIcon from "@/assets/youtube.svg";
import telegramIcon from "@/assets/telegram.svg";
import vkIcon from "@/assets/vk.svg";

import "./Footer.scss";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h2 className="footer__title">Мы помним</h2>
                <Navbar className="footer__nav"/>
                <ul className="footer__socials">
                    <li className="footer_socialIcon">
                        <a href="#">
                            <img src={phoneIcon} alt="phone" />
                        </a>
                    </li>
                    <li className="footer_socialIcon">
                        <a href="#">
                            <img src={youtubeIcon} alt="youtube" />
                        </a>
                    </li>
                    <li className="footer_socialIcon">
                        <a href="#">
                            <img src={telegramIcon} alt="telegram" />
                        </a>
                    </li>
                    <li className="footer_socialIcon">
                        <a href="#">
                            <img src={vkIcon} alt="vk" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
