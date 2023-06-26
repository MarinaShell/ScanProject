import React from 'react';
import './AuthForm.css';
import goog from './Goog.svg';
import face from './face.svg';
import yand from './Yand.svg';
import lock from './auth_lock.svg';
import { CustomButton } from '../../CustomComponents/CustomButton/CustomButton';
import ComponentImage from '../../CustomComponents/ComponentImage/ComponentImage';


const AuthForm = () => {
	return (
		<div>
			<div className='form'>
				<div className='lck'>
					<ComponentImage source={lock} width='75px' height='92px' />
				</div>
				<div className='head'>
					<div className='el el-1'>
						Войти
						<div className='line line-1'></div>
					</div>
					<div className='el el-2'>
						Зарегистрироваться
						<div className='line line-2'></div>
					</div>
				</div>
				<form className='form_auth'>
					<p className='form_auth_text'>Логин или номер телефона:</p>
					<p><input type='text' required /></p>
					<p className='form_auth_text'>Пароль:</p>
					<p><input type='password' required /></p>
				</form>
				<CustomButton variant='blue'>Войти</CustomButton><br />
				<a className='return_passw'>Восстановить пароль</a>
				<p className='form_auth_text'>Войти через:</p>
				<div className='logos'>
					<button><img src={goog} /></button>
					<button class="mr"><img src={face} /></button>
					<button><img src={yand} /></button>
				</div>
			</div >
		</div >
	)
}

export default AuthForm
