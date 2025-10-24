import style from './style.module.css'

type TButton = {
    title: string;
    onClick: ()=>void;
    color: string;
}

export const Button = ({title, onClick, color}: TButton) =>{
    return(
        <button 
            className={color === 'blue'  ? style.blue : style.green}
            onClick={onClick}>
            {title}
        </button>
    )
}