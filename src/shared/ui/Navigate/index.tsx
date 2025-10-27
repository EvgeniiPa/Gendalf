import style from './style.module.css'
import Favicon from '../../../assets/Favicon 156.svg'
import { NavigateList } from '../../constants'
import Search from '../../../assets/search.svg'
import Basket from '../../../assets/basket.svg'
import Lk from '../../../assets/lk.svg'
import Mob from '../../../assets/моб-04 1.svg'
import Burger from '../../../assets/Иконка Бургер.svg'


export const Navigate = ()=>{
    return(
        <div className={style.wrapper}>
            <div className={style.containerMobile}>
                <img src={Search} alt="" />
                <img src={Basket} alt="" />
                <div >
                    <a href="/" >
                        <img className={style.favicon} src={Mob} alt="favicon" />
                    </a>
                </div>
                <img src={Lk} alt="" />
                <div>
                    <img src={Burger} alt="menu" />
                </div>
            </div>
            <div className={style.containerDesktop}>
                <div >
                    <a href="/" >
                        <img className={style.favicon} src={Favicon} alt="favicon" />
                    </a>
                </div>
                <nav className={style.navigate}>
                    <ul className={style.list}>
                        {NavigateList.map((item)=>{
                            return(
                                <li className={style.item} key={item}>
                                    <a className={style.link} href="">
                                        {item}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    )
}