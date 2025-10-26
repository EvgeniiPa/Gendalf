import style from './style.module.css'
import Favicon from '../../../assets/Favicon 156.svg'
import { NavigateList } from '../../constants'


export const Navigate = ()=>{
    return(
        <div className={style.wrapper}>
            <div >
                <img className={style.favicon} src={Favicon} alt="favicon" />
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
    )
}