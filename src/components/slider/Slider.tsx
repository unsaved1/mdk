import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Controls } from "./controls";
import { Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

import "swiper/css";
import "./Slider.scss";

interface ISliderProps {
    photos: Array<string>;
}

export const Slider = ({ photos }: ISliderProps) => {
    const swiperRef = useRef<SwiperRef | null>(null);
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        if (swiperRef.current?.swiper) {
            const handler = () => {
                if (swiperRef.current?.swiper) {
                    setCurrentSlide(swiperRef.current?.swiper.activeIndex + 1);
                }
            };
            swiperRef.current.swiper.on("slideChange", handler);
            return () => swiperRef.current?.swiper?.off("slideChange", handler);
        }
    }, []);

    return (
        <section className="slider">
            <Swiper
                ref={swiperRef}
                className="slider__swiper"
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
            >
                {photos.map((item, i) => {
                    return (
                        <SwiperSlide key={i} className="slider__slide">
                            <img src={item} alt={`image: ${i}`} />
                        </SwiperSlide>
                    );
                })}
                <SwiperSlide className="slider__slide">
                    <video src='/video.mp4' autoPlay muted controls/>
                </SwiperSlide>
                <div className="slider__desc">
                    <p>Фотография из семейного архива</p>
                </div>
                <div className="slider__modules">
                    <p className="slider__navigation">
                        {currentSlide}/{photos.length + 1}
                    </p>
                    <Controls />
                </div>
            </Swiper>
        </section>
    );
};
