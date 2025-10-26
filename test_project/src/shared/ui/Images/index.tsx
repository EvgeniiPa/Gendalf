import First from '../../../assets/Ценности-1.png'
import Second from '../../../assets/Ценности-2.png'
import Third  from '../../../assets/Ценности-3.png'
import Fourth  from '../../../assets/Ценности-4.png'
import Fifth from '../../../assets/Ценности-5.png'
import I from '../../../assets/1.svg'
import II from '../../../assets/2.svg'
import III from '../../../assets/3.svg'
import IV from '../../../assets/4.svg'
import V from '../../../assets/5.svg'
import style from './style.module.css'
import NumberTwo from '../../../assets/Number2.svg'
import NumberThree from '../../../assets/number3.svg'
import NumberFour from '../../../assets/number4.svg'
import NumberFive from '../../../assets/number5.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';

export const Images = ()=>{
    return(
        <>
            <div className={style.wrapper}>
                <Swiper
                    slidesPerView={3.6}
                    grid={{rows: 1}}
                    spaceBetween={80}
                    pagination={{clickable: true}}
                    modules={[Grid, Pagination]}
                >
                    <SwiperSlide>
                        <div className={style.container}>
                            <img src={First} alt="image"   className={style.image}/>
                            <img src={I} alt="image" className={style.numberI}/>
                            <div className={style.description}> 
                                <h3 className={style.title}>Быть командой</h3>
                                <span className={style.text}>Готовность вносить вклад в общие цели команды и достигать ихр</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.container}>
                            <img src={Second} alt="image" className={style.image}/>
                            <img src={II} alt="image" className={style.numberII}/>
                            <img src={NumberTwo} alt="image" className={style.numberTwo}/>
                            <div className={style.description}> 
                                <h3 className={style.title}>Побеждать и не сдаваться</h3>
                                <span className={style.text}>Быть ориентированным на результат, настойчивым и не сдаваться перед трудностями.</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.container}>
                            <img src={Third} alt="image" className={style.image}/>
                            <img src={III} alt="image" className={style.numberIII}/>
                            <img src={NumberThree} alt="image" className={style.numberThree}/>
                            <div className={style.description}> 
                                <h3 className={style.title}>Заботиться о клиентах</h3>
                                <span className={style.text}>Выполнять обещания и интересоваться потребностями своих клиентов</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.container}>
                            <img src={Fourth} alt="image" className={style.image}/>
                            <img src={IV} alt="image"className={style.numberIV}/>
                            <img src={NumberFour} alt="image" className={style.numberFour}/>
                            <div className={style.description}> 
                                <h3 className={style.title}>Быть увлеченным и ответственным</h3>
                                <span className={style.text}>Вкладывать душу в то, что делаешь и получать от работы удовольствие.</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.container}> 
                            <img src={Fifth} alt="image" className={style.image}/>
                            <img src={V} alt="image" className={style.numberV}/>
                            <img src={NumberFive} alt="image" className={style.numberFive}/>
                            <div className={style.description}> 
                                <h3 className={style.title}>Развиваться</h3>
                                <span className={style.text}>Постоянно расти личностно и профессионально для достижения поставленных целей.</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
     )
}