import { useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import style from './style.module.css'
import Left from '../../../assets/LeftArrow.svg'
import Right from '../../../assets/RightArrow.svg'
import IMG1 from '../../../assets/Живая лент1.png' 
import IMG2 from '../../../assets/Живая лента2.png'
import IMG3 from '../../../assets/Живая лента3.png'
import IMG4 from '../../../assets/Живая лента4.png'
import { Card } from '../../../shared/ui/Card'
import { Images } from '../../../shared/ui/Images';


type CustomSwiper={
    type:string;
}

const CardsList=[
    {'img': IMG1, title: 'Экономим на бумаге и угадываем фильмы: дайджест видео марта 2022 года'},
    {'img': IMG2, title: 'Изменения 2022 года'},
    {'img': IMG3, title: 'Почему стоит работать программистом в 2022 году'},
    {'img': IMG4, title: 'Автоматизированный УСН и путевые листы: дайджест новостей за март 2022. Автоматизированный УСН и путевые листы'},

    {'img': IMG3, title: 'Почему стоит работать программистом в 2022 году'},
    {'img': IMG4, title: 'Автоматизированный УСН и путевые листы: дайджест новостей за март 2022. Автоматизированный УСН и путевые листы'},
]

export const CustomSwiper = ({type}: CustomSwiper)=>{
    const swiperRef = useRef(null);

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <>
            <article className={`${type==='values' ? style.values : style.tape,  style.wrapper}`}>
                <h3 className={style.title}>{type === 'values' ? 'Наши ценности скажут о нас больше:' : 'Живая лента'}</h3>
                {type === "values" ? (
                        <>
                            <Images/>
                        </>
                    ): (
                        <div className={style.container}>
                            <div className={style.swiperButtonPrev} onClick={handlePrev}>
                                <img src={Left} alt="arrow" />
                            </div>
                            <Swiper
                                ref={swiperRef}
                                className={style.swiper}
                                loop={true}
                                centeredSlides={false}
                                modules={[Navigation]}
                                breakpoints={{
                                    380:{
                                        slidesPerView: 1,
                                        spaceBetween: 0,
                    
                                    },
                                    727:{
                                        slidesPerView: 2,
                                        spaceBetween: 28,
                                        
                                    },
                                    937:{
                                        slidesPerView: 3,
                                        spaceBetween: 28,
                                    },
                                    1200:{
                                        slidesPerView: 4,
                                        spaceBetween: 28,
                                    }
                                }}
                            >
                                {CardsList.map((item, index)=>{
                                    return(
                                        <SwiperSlide key={index}>
                                            <Card title={item.title} img={item.img}/>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                            <div className={style.swiperButtonNext} onClick={handleNext}>
                                <img src={Right} alt="arrow" />
                            </div>
                        </div>
                )}
            </article>
        </>
    );
}