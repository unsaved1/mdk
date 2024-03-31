import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

import './Navigation.scss';

export const Navigation = () => {
    const swiper = useSwiper();
    const [currentSlide, setCurrentSlide] = useState(swiper.activeIndex + 1);

    useEffect(() => {
        const handler = () => {
            setCurrentSlide(swiper.activeIndex + 1);
        };
        swiper.on("slideChange", handler);
        return () => swiper.off("slideChange", handler);
    }, []);

    return (
        <p className="navigation">
            {currentSlide}/{swiper.slides.length}
        </p>
    );
};
