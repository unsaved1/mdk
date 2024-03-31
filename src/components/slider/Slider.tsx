import {Swiper, SwiperSlide} from 'swiper/react'; 
import 'swiper/css';
import './Slider.scss';
import { Controls } from './controls';
import { Navigation } from './navigation';

interface ISliderProps {
    photos: Array<string>;
} 

export const Slider = ({photos}: ISliderProps) => {
    return (
        <section className="slider">
            <Swiper 
                className='slider__swiper'
                spaceBetween={0}
                autoHeight
                slidesPerView={1}
            >
                {photos.map((item, i) => {
                    return (
                        <SwiperSlide key={i} className='slider__slide'>
                            <img src={item} alt={`image: ${i}`}/>
                        </SwiperSlide>
                    )
                })}
                <Navigation/>
                <Controls/>
                <div className="slider__desc">
                    <p>Фотография из семейного архива</p>
                </div>
            </Swiper>
        </section>
    );
};
