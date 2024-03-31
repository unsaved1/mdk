import photo from "@/assets/mainPhoto.jpg";
import './Promo.scss';

export const Promo = () => {
    return (
        <section className="promo">
            <div className="promo__container container">
                <div className="promo__photo">
                    <img src={photo} alt="photo" />
                </div>
                <div className="promo__info">
                    <h2 className="promo__title">белов андрей сергеевич</h2>
                    <div className="promo__devider">
                        <div></div>
                        <span>XX.XX.XXXX – xx.xx.xxxx</span>
                    </div>
                    <div className="promo__subtitle">мемориальная страница</div>
                    <ul className="promo__items">
                        <li className="promo__item">
                            <a href="#archive">фотоархив</a>
                        </li>
                        <li className="promo__item">
                            <a href="#biography">биография</a>
                        </li>
                        <li className="promo__item">
                            <a href="#memories">воспоминания близких</a>
                        </li>
                        <li className="promo__item">
                            <a href="#words">слова памяти</a>
                        </li>
                        <li className="promo__item">
                            <a href="#grave-place">место захоронения</a>
                        </li>
                        <li className="promo__item">
                            <a href="#relatives-pages">родственные страницы</a>
                        </li>
                        <li className="promo__item">
                            <a href="#links">ссылки</a>
                        </li>
                        <li className="promo__item">
                            <a href="#qr-code   ">qr-код</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
