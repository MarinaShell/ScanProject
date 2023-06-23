import React from 'react';
import './AuthForm.css';
import goog from './Goog.svg'
import face from './face.svg'
import yand from './Yand.svg'
import { CustomButton } from '../../ComponentButton/ComponentButton';

const AuthForm = () => {
  return (
    <div>
      <div className='form'>
        <form class='form_auth'>
          <p class='form_auth_text'>Логин или номер телефона:</p>
          <p><input type='text' required /></p>
          <p class='form_auth_text'>Пароль:</p>
          <p><input type='password' required /></p>
        </form>
        <CustomButton variant='blue'>Войти</CustomButton><br />
        <a className='return_passw'>Восстановить пароль</a>
        <p class='form_auth_text'>Войти через:</p>
        <div className='logos'>
          <button><img src={goog} /></button>
          <button><img src={face} /></button>
          <button><img src={yand} /></button>
        </div>
      </div>
    </div>
  )
}

export default AuthForm