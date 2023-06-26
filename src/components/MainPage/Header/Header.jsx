import React from 'react'
import { CustomButton } from '../../CustomComponents/CustomButton/CustomButton'
import ComponentHeaderText from '../../CustomComponents/ComponentHeaderText/ComponentHeaderText'
import ComponentText from '../../CustomComponents/ComponentText/ComponentText'
import ComponentImage from '../../ComponentImage/ComponentImage'
import main_up from './main_up.svg'
import './Header.css'

const Header = () => {
	return (
		<div className='header'>
			<div className='left-part'>
				<div className='left-text'>
					<div className='size60 size40'>
						<ComponentHeaderText>
							Сервис по поиску публикаций  <br />о компании <br />по его ИНН
						</ComponentHeaderText>
					</div>
					<div className='size20' id='text'>
						<ComponentText>
							Комплексный анализ публикаций, получение данных <br />в формате PDF на электронную почту.
						</ComponentText>
					</div>
				</div>
				<div className='button'>
					<CustomButton variant='blue'>Запросить данные</CustomButton>
				</div>
			</div >
			<div className='image'>
				<ComponentImage source={main_up} width='100%' height='100%' />
			</div>
		</div >
	)
}

export default Header