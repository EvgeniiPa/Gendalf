import style from './style.module.css'

type TCard = {
    img:string;
    title:string;
}

export const Card = ({img, title}: TCard)=>{
    return(
        <div className={style.wrapper}> 
            <div className={style.image}>
                <img src={img} alt="image" className={style.image}/>
                <h4 className={style.title}>{title}</h4>
            </div>
            <button className={style.button}>Перейти к статье</button>
        </div>
    )
}