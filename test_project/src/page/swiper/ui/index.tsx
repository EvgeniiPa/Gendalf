// import Swiper from "swiper"
// import { Navigation, Pagination } from "swiper/modules"
import style from './style.module.css'
import IMG1 from '../../../assets/Живая лент1.png' 
import IMG2 from '../../../assets/Живая лента2.png'
import IMG3 from '../../../assets/Живая лента3.png'
import IMG4 from '../../../assets/Живая лента4.png'
import { Card } from '../../../shared/ui/Card'


type CustomSwiper={
    type:string;
}

const CardsList=[
    {'img': IMG1, title: 'Экономим на бумаге и угадываем фильмы: дайджест видео марта 2022 года'},
    {'img': IMG2, title: 'Изменения 2022 года'},
    {'img': IMG3, title: 'Почему стоит работать программистом в 2022 году'},
    {'img': IMG4, title: 'Автоматизированный УСН и путевые листы: дайджест новостей за март 2022. Автоматизированный УСН и путевые листы'},
]

export const CustomSwiper = ({type}: CustomSwiper)=>{
    return(
        <article className={`${style.wrapper} ${type ==='values' ? style.values : style.tape}`}>
            <h2 className={style.title}>{type === 'values' ? 'Наши ценности скажут о нас больше' : 'Живая лента'}</h2>
            <div className={style.container}>

                {CardsList.map((item, index)=>{
                    return(
                        <Card title={item.title} img={item.img} key={index}/>
                    )
                })}
                
            </div>
        </article>
    )
}