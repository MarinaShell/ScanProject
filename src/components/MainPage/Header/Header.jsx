import React from 'react'
import { CustomButton } from '../../ComponentButton/ComponentButton'
import ComponentHeaderText from '../../ComponentHeaderText/ComponentHeaderText'
import ComponentText from '../../ComponentText/ComponentText'
import ComponentImage from '../../ComponentImage/ComponentImage'
import main_up from './main_up.svg'
import './Header.css'
import '../../../index.css';

const Header = () => {
	return (<div className='header'>
		<div>
			<div className='font-ferry'>
				<ComponentHeaderText style={{
					fontSize: "60px",
					whiteSpace: "break-spaces",
					lineHeight: "72px",
					textTransform: "uppercase",
					fontStyle: "normal",
					marginLeft: "50px",
					letterSpacing: "0.01em",
					fontWeight: 900,
					width: "720px",
					fontFamily: "FerryBlack",
					textAlign: "left"
				}}>Сервис по поиску публикаций о компании по его ИНН</ComponentHeaderText>
			</div>

			<div className='size20' id='text'>
				<ComponentText style={{
					fontSize: "20px",
					whiteSpace: "break-spaces",
					lineHeight: "24px",
					textTransform: "uppercase",
					fontStyle: "normal",
					letterSpacing: "0.01em",
					fontWeight: 400,
					fontFamily: "Inter",
					width: "743px",
					textAlign: "left"
				}}>
					Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
				</ComponentText>

			</div>
			<div className='button'>
				<CustomButton variant='blue'>Запросить данные</CustomButton>
			</div>
		</div>
		<div className='image'>
			<ComponentImage source={main_up} width='100%' height='auto' />
		</div>
	</div >
	)
}

export default Header