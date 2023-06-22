import React from 'react'
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
    <div className='size20 colorWhite background'>
      <ComponentText  textName='Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.'/>
		</div>
    </div>
    <div className='image'>
      <ComponentImage source={main_up} width='629px' height='620px' />
    </div>
  </div>
  )
}

export default Header