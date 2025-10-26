import style from './style.module.css'
import { Navigate } from '../../../shared/ui/Navigate'
import { Header } from '../../../shared/ui/Header'
import { CustomForm } from '../../form/ui'
import { CustomSwiper } from '../../swiper/ui'

export const Home = ()=>{
    return(
        <header className={style.header}>
            <Navigate/>
            <Header/>
            <CustomSwiper type='values'/>
            <CustomSwiper type='tape'/>
            <CustomForm/>
        </header>
    )
}