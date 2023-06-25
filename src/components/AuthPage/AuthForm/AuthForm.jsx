import React from 'react';
import './AuthForm.css';
import goog from './Goog.svg';
import face from './face.svg';
import yand from './Yand.svg';
import lock from './auth_lock.svg';
import { CustomButton } from '../../ComponentButton/ComponentButton';
import ComponentImage from '../../ComponentImage/ComponentImage';

const AuthForm = () => {
	return (
		<div>

			<div className='form'>
				{/* замочек перенесен, чтобы была возможность позиционировать его absolute относительно form, указав form position: relative */}
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
				<form class='form_auth'>
					<p class='form_auth_text'>Логин или номер телефона:</p>
					<p class='field'><input type='text' required /></p>
					<p class='form_auth_text'>Пароль:</p>
					<p class='field'><input type='password' required /></p>
				</form>
				<div className='button'><CustomButton variant='blue'>Войти</CustomButton></div><br />
				<a className='return_passw'>Восстановить пароль</a>

				{/* перемещена позиция logos, чтобы этой обертке указать стили для правильного расположения дочерних элементов*/}
				<div className='logos'>
					<p class='form_auth_text'>Войти через:</p>
					{/* добавлена обертка buttons для кнопок соцсетей для установки стилей  */}
					<div className='buttons'>
						<button><img src={goog} /></button>
						{/* добавлен класс mr для паддингов справа и слева  */}
						<button class="mr"><img src={face} /></button>
						<button><img src={yand} /></button>
					</div>
				</div>
			</div>
		</div >
	)
}

export default AuthForm