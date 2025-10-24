import { Form, Field } from 'react-final-form';
import { useState } from 'react';
import style from './style.module.css'
import { CustomInput } from '../../../shared/ui/Input';
import Icon from '../../../assets/Vector.svg'

export const CustomForm = () => {
  const [attachedFile, setAttachedFile] = useState(null);

  const onSubmit = async (values, form) => {
    console.log('Отправленные данные:', values);
    form.reset();
  };

  const validate = (values) => {
    const errors = {};
    
    if (!values.name) {
      errors.name = 'Обязательное поле';
    }
    
    if (!values.phone) {
      errors.phone = 'Обязательное поле';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(values.phone)) {
      errors.phone = 'Некорректный формат телефона';
    }
    
    if (!values.email) {
      errors.email = 'Обязательное поле';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Некорректный email';
    }
    
    if (!values.position) {
      errors.position = 'Обязательное поле';
    }
    
    if (!values.workType || values.workType.length === 0) {
      errors.workType = 'Выберите хотя бы один вариант';
    }

    return errors;
  };

  const handleFileChange = (event, form) => {
    const file = event.target.files[0];
    if (file) {
      setAttachedFile(file);
      form.change('resume', file.name);
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contant}>
          <h2 className={style.title}>Записаться на собеседование</h2>
          
            <Form
              onSubmit={onSubmit}
              validate={validate}
              render={({ handleSubmit, form, submitting}) => (
                <form 
                  className={style.form}
                  onSubmit={handleSubmit} 
                  >
                  <div className={style.inputs}>
                    <div>
                      <Field name="name">
                        {({input, meta})=>(
                          <div>
                              <CustomInput type='text' placeholder='Как к вам обращаться?' {...input} error={meta.touched && meta.error}/>
                          </div>
                        )}
                      </Field>
                    </div>
                    <div>
                      <Field name="phone">
                        {({input, meta})=>(
                          <div>
                              <CustomInput type='number' placeholder='Телефон' {...input} error={meta.touched && meta.error}/>
                          </div>
                        )}
                      </Field>
                      
                    </div>

                    <div>
                      <Field name="email" >
                        {({input, meta})=>(
                          <div>
                              <CustomInput type='email' placeholder='Email' {...input} error={meta.touched && meta.error}/>
                          </div>
                        )}
                      </Field>
                    </div>

                    <div>
                      <Field name="position">
                        {({input, meta})=>(
                          <div>
                              <CustomInput type='text' placeholder='Желаемая должность' {...input} error={meta.touched && meta.error}/>
                          </div>
                        )}
                      </Field>
                    </div>
                  </div>

                  <div>
                    <label className={style.titleCategory}>Выберите категорию занятости</label>
                    <div >
                        <Field name="workType" type='radio' value='office'>
                          {({input, meta}) => (
                            <div>
                              <CustomInput id='Работа в офисе' text='Работа в офисе' {...input}/>
                            </div>
                          )}
                        </Field>

                        <Field name="workType"  type="radio" value='internship'>
                          {({input, meta}) => (
                            <div>
                              <CustomInput  id='Стажировка'  text='Стажировка' {...input}/>
                            </div>
                          )}
                        </Field>
                      
                        <Field name="workType" value='remote'  type="radio">
                          {({input, meta}) => (
                            <div>
                              <CustomInput  id='Удаленная работа'  text='Удаленная работа' {...input}/>
                            </div>
                          )}
                        </Field>

                      
                    </div>
                  </div>

                  <div>
                    <Field
                      name="questions"
                      component="textarea"
                      placeholder="Ваши вопросы"
                      rows="4"
                      style={{ 
                        width: '100%', 
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        resize: 'vertical',
                        
                      }}
                    />
                  </div>
                  <div className={style.buttons}>
                    <div>
                      <div>
                        <input
                          type="file"
                          id="resume"
                          accept=".pdf,.doc,.docx,.txt"
                          onChange={(e) => handleFileChange(e, form)}
                          style={{ display: 'none' }}
                          placeholder='Прикрепить резюме'
                        />
                        <button
                          type="button"
                          onClick={() => document.getElementById('resume').click()}
                          className={style.button}
                        >
                        {'Прикрепить резюме'}
                        <img src={Icon} alt="" className={style.icon}/>
                        </button>
                       
                        {attachedFile && (
                          <div className={style.document}>
                            <span className={style.documentTitle}>{attachedFile.name} готов к отправке</span> 
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className={style.button}
                    >
                      {submitting ? 'Отправка...' : 'Записаться'}
                    </button>
                  </div>
                </form>
              )}
            />
        </div>
      </div>
      <div className={style.overlay}></div>
    </div>
  );
};