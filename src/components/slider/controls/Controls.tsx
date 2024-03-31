import { useSwiper } from "swiper/react";
import arrowIcon from '@/assets/arrow.svg';

import "./Controls.scss";

export const Controls = () => {
    const swiper = useSwiper();

    return (
        <div className="controls">
            <button className="controls__button controls__button_prev" onClick={() => swiper.slidePrev()}>
                <img src={arrowIcon} alt="prev"/>
            </button>
            <button className="controls__button controls__button_next" onClick={() => swiper.slideNext()}>
                <img src={arrowIcon} alt="next"/>
            </button>
        </div>
    );
};
