import React from 'react';
import './SearchForm.css';
import { CustomButton } from '../../ComponentButton/ComponentButton'

const SearchForm = () => {
  return (
    <div>
        <div className='form'>
            <form>
                <div className='part_form1'>
                    <p>ИНН компании*</p>
                    <input type="number" required="required" placeholder="10 цифр" />
                    <p>Тональность</p>
                    <select>
                    <option value="">Любая</option>
                    <option value="1">Позитивная</option>
                    <option value="2">Негативная</option>
                    </select>
                    <p>Количество документов в выдаче*</p>
                    <input type="number" required="required" placeholder="от 1 до 1000" />
                </div>
                <div className='part_form2'>
                    <div className='checkbox'><input type="checkbox" /><label>Признак максимальной полноты</label></div><br />
                    <div className='checkbox'><label><input type="checkbox" />Упоминания в бизнес-контенте</label></div><br />
                    <div className='checkbox'><label><input type="checkbox" />Главная роль в публикации</label></div><br />
                    <div className='checkbox'><label><input type="checkbox" />Публикации только с риск-факторами</label></div><br />
                    <div className='checkbox'><label><input type="checkbox" />Включать технические новости рынков</label></div><br />
                    <div className='checkbox'><label><input type="checkbox" />Включать анонсы и календари</label></div><br />
                    <div className='checkbox'><label><input type="checkbox" />Включать сводки новостей</label></div><br />
                </div>
                <div className='part_form3'>
                    <p>Диапазон поиска*</p>
                    <input type="date" required="required" placeholder="Дата начала" />
                    <input type="date" required="required" placeholder="Дата конца" />
                </div>
            </form>
            <div className='btn'>
                <CustomButton variant='blue'>Поиск</CustomButton><br />
                <p>* Обязательные к заполнению поля</p>
            </div>
        </div>
    </div>
  )
}

export default SearchForm