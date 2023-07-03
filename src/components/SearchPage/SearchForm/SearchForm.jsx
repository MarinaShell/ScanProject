import React from 'react';
import './SearchForm.css';
import ComponentImage from '../../CustomComponents/ComponentImage/ComponentImage';
import { CustomButton } from '../../CustomComponents/CustomButton/CustomButton'
import MyDocument from './images/Document.svg';
import MyGuy from './images/guy.svg';
import InputMask from 'react-input-mask';

const SearchForm = () => {


	return (
		<div className='form-containe'>
			<div className='my-document-add'><ComponentImage img source={MyDocument} width="100px" height="100px" /></div>
			<form >
				<div className='part-left'>

					<div className='part_input'>
						<p className='title-input title-input_inn'>ИНН компании*</p>
						<InputMask className='field-input1 inn'
							type="text"
							name="inn"
							id="from"
							placeholder="ИНН"
							mask="9999999999"
							pattern="^\d{10}$"
							required
						/>

						<p className='title-input'>Тональность</p>
						<select className='tonality '>
							<option value="">Любая</option>
							<option value="1">Позитивная</option>
							<option value="2">Негативная</option>
						</select>
						<p className='title-input'>Количество документов в выдаче*</p>
						<InputMask className='field-input-doc'
							type="text"
							required="required"
							placeholder="от 1 до 1000"
							min="1"
							max="1000"
							mask="9999"
							pattern="^\d{4}$"
						/>
					</div>

					<div className='part_search'>
						<p className='title-input title-input_search'>Диапазон поиска*</p>
						<div className='part_search_block-input'>
							<input className='field-input2' name="date" type="date" onfocus="(this.type='date')" onblur="if(!this.value)this.type='text'" required="required" placeholder="Дата начала" />
							<input className='field-input2' name="date" type="date" onfocus="(this.type='date')" onblur="if(!this.value)this.type='text'" required="required" placeholder="Дата конца" />
						</div>
					</div>

				</div>


				<div className='part-right'>

					<div className='part_checkbox'>
						<div className='checkbox'><label><input type="checkbox" /><span></span>Признак максимальной полноты</label></div>
						<div className='checkbox'><label><input type="checkbox" /><span></span>Упоминания в бизнес-контенте</label></div>
						<div className='checkbox'><label><input type="checkbox" /><span></span>Главная роль в публикации</label></div>
						<div className='checkbox'><label><input type="checkbox" /><span></span>Публикации только с риск-факторами</label></div>
						<div className='checkbox'><label><input type="checkbox" /><span></span>Включать технические новости рынков</label></div>
						<div className='checkbox'><label><input type="checkbox" /><span></span>Включать анонсы и календари</label></div>
						<div className='checkbox'><label><input type="checkbox" /><span></span>Включать сводки новостей</label></div>
					</div>


					<div className='btn'>
						<CustomButton variant='blue'>Поиск</CustomButton><br />
						<p className='btn-p'>* Обязательные к заполнению поля</p>
					</div>

				</div>

			</form >
			<div className='my-guy-add'><ComponentImage img source={MyGuy} width="100%" height="auto" /></div>
		</div >
	)
}

export default SearchForm
