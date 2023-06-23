import React from 'react'
import { CustomButton } from '../../ComponentButton/ComponentButton'
import { ComponentHeader } from '../../ComponentHeader/ComponentHeader'
import { ComponentText } from '../../ComponentText/ComponentText'
import ComponentImage from '../../ComponentImage/ComponentImage'
import main_up from './main_up.svg'
import './Header.css'

const Header = () => {
  return (<div className='header'>
    <div>
    <div className='size60'>
      <ComponentHeader headerTextName='Сервис по поиску публикаций о компании по его ИНН' />
    </div>
    <div className='size20 colorWhite background' id='text'>
      <ComponentText  textName='Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.'/>
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