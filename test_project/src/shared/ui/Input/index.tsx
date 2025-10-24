import style from './style.module.css'

type TCustomInput = {
  type: string;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  id?: string;
  value?: string;
  text?: string;
  name?: string;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  onFocus?: (event: any) => void;
  checked?: boolean; // Добавлено для radio
}


export const CustomInput = ({  type, 
  placeholder, 
  error,
  helperText,
  id, 
  value, 
  text, 
  name,
  onChange,
  onBlur,
  onFocus,
  checked,
  ...props}: TCustomInput)=>{

    const handleChange = (event)=>{
        if(onChange) onChange(event)
    }

    return(
        <div className={style.container}>
            {type === 'radio' ? 
                <label>
                    <input 
                        className={style.radio}
                        type={type}
                        id={id}
                        value={value}
                        onChange={handleChange}
                        name={name}
                        checked={checked}
                    /> 
                    <span className={style.radioButton}></span>
                    <span className={style.radioText}>{text}</span>
                </label>
                :
                <>
                    <input 
                        className={`${style.input} ${!error ? style.inputError : style.inputNoError}`}
                        type={type} 
                        placeholder={placeholder}
                        value={value}
                        onChange={handleChange}
                        name={name}
                        {...props}
                    />
                </>
            }
        </div>
    )
}