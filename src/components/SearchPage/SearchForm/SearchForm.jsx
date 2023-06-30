import React from 'react';
import './SearchForm.css';
import { CustomButton } from '../../CustomComponents/CustomButton/CustomButton'
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
	const navigate = useNavigate();
	return (
		<div>
			<div className='form'>
				<form>

					<div className='part_form1'>
						<p className='title-input'>ИНН компании*</p>
						<input className='field-input1' type="number" required="required" placeholder="10 цифр" />
						<p className='title-input'>Тональность</p>
						<select className='tonality '>
							<option value="">Любая</option>
							<option value="1">Позитивная</option>
							<option value="2">Негативная</option>
						</select>
						<p className='title-input'>Количество документов в выдаче*</p>
						<input className='field-input1' type="number" required="required" placeholder="от 1 до 1000" />

						<div className='part_form3'>
							<p className='title-input'>Диапазон поиска*</p>
							<div className='part_form3_block-input'>
								<input className='field-input2' name="date" type="text" onfocus="(this.type='date')" onblur="if(!this.value)this.type='text'" required="required" placeholder="Дата начала" />
								<input className='field-input2' name="date" type="text" onfocus="(this.type='date')" onblur="if(!this.value)this.type='text'" required="required" placeholder="Дата конца" />
							</div>
						</div>
					</div>


					<div className="part_form3">
						<div className='part_form2'>
							<div className='checkbox'><label><input type="checkbox" className='square' />Признак максимальной полноты</label></div>
							<div className='checkbox'><label><input type="checkbox" className='square' />Упоминания в бизнес-контенте</label></div>
							<div className='checkbox'><label><input type="checkbox" className='square' />Главная роль в публикации</label></div>
							<div className='checkbox'><label><input type="checkbox" className='square' />Публикации только с риск-факторами</label></div>
							<div className='checkbox'><label><input type="checkbox" className='square' />Включать технические новости рынков</label></div>
							<div className='checkbox'><label><input type="checkbox" className='square' />Включать анонсы и календари</label></div>
							<div className='checkbox'><label><input type="checkbox" className='square' />Включать сводки новостей</label></div>
						</div>


						<div className='btn'>
							<CustomButton variant='blue' onClick={() => { navigate('/result')}}>Поиск</CustomButton><br />
							<p>* Обязательные к заполнению поля</p>
						</div>
					</div >
				</form >
			</div >
		</div >
	)
}

export default SearchForm