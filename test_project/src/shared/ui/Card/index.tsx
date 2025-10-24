import style from './style.module.css'

export const Card = ({img, title})=>{
    return(
        <div className={style.wrapper}> 
            <div className={style.image}>
                <img src={img} alt="image" className={style.image}/>
            </div>
            <div className={style.title}>
                <h4>{title}</h4>
            </div>
            <div>
                <button className={style.button}>Перейти к статье</button>
            </div>
        </div>
    )
}