import React from 'react'
import { CustomButton } from '../../CustomComponents/CustomButton/CustomButton'
import ComponentHeaderText from '../../CustomComponents/ComponentHeaderText/ComponentHeaderText'
import ComponentText from '../../CustomComponents/ComponentText/ComponentText'
import ComponentImage from '../../ComponentImage/ComponentImage'
import main_up from './main_up.svg'
import './Header.css'

const Header = () => {
  return (<div className='header'>
    <div>
      <div className='size60'>
        <ComponentHeaderText>Сервис по поиску публикаций о компании по его ИНН</ComponentHeaderText>
      </div>
      <div className='size20' id='text'>
        <ComponentText>
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
  </div>
  )
}

export default Header