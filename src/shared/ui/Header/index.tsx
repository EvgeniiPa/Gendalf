import style from './style.module.css'
import { Button } from '../Button/index'

export const Header = ()=>{
    return(
        <>
        <div className={style.container}>
                    <div className={style.contant}>
                        <div className={style.title}>
                            <h1>
                                Добро пожаловать в ГЭНДАЛЬФ!
                            </h1>
                        </div>
                        <div className={style.description}> 
                            <h4>
                                Мы готовы поделиться секретом, почему любим компанию, в которой работаем. Если тебе будут близки наши ценности и идеи, то смело записывайся на собеседование!
                            </h4>
                        </div>
                        <div className={style.buttons}>
                            <Button title='Почему мы' />
                            <Button title='Записаться на собеседование' color='white'/>
                        </div>
                    </div> 
                <div className={style.overlay}></div>
            </div>
        </>
    )
}