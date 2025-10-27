import style from './style.module.css'

type TButton = {
    title: string;
    color?: string;
}

export const Button = ({title, color}: TButton) =>{
    return(
        <button className={color === 'white'  ? style.white : style.green}>
            {title}
        </button>
    )
}