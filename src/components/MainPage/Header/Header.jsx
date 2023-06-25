import React from 'react'
import { CustomButton } from '../../ComponentButton/ComponentButton'
import ComponentHeader from '../../ComponentHeader/ComponentHeader'
import ComponentText from '../../ComponentText/ComponentText'
import ComponentImage from '../../ComponentImage/ComponentImage'
import main_up from './main_up.svg'
import './Header.css'
import AuthPage from '../../AuthPage/AuthPage'

const Header = () => {
	return (<div className='header'>
		<div>
			<div className='size60'>
				<ComponentHeader><p>Сервис по поиску публикаций  <br />о компании <br />по его ИНН</p></ComponentHeader>
			</div>
			<div className='size20' id='text'>
				<ComponentText>
					Комплексный анализ публикаций, получение данных <br />в формате PDF на электронную почту.
				</ComponentText>
			</div>
			<div className='button'>
				<CustomButton variant='blue'>Запросить данные</CustomButton>
			</div>
		</div>
		<div className='image'>
			<ComponentImage source={main_up} width='100%' height='auto' />
		</div>
	</div>
	)
}

export default Header