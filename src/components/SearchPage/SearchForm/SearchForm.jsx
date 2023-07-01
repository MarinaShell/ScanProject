import React from 'react';
import './SearchForm.css';
import ComponentImage from '../../CustomComponents/ComponentImage/ComponentImage';
import { CustomButton } from '../../CustomComponents/CustomButton/CustomButton'
import MyDocument from './images/Document.svg';
import MyGuy from './images/guy.svg';

const SearchForm = () => {

	function checkInnShort(value) {
		if (typeof value !== 'string' ||
			(value.length !== 10 && value.length !== 12) ||
			value.split('').some((symbol) => isNaN(Number(symbol)))
		) return false;

		if (value.length === 10) {
			return Number(value[9]) === (value.split('').slice(0, -1)
				.reduce(
					(summ, symbol, index) =>
						[2, 4, 10, 3, 5, 9, 4, 6, 8][index] * Number(symbol) + summ,
					0)
				% 11) % 10;

		} else if (value.length === 12) {
			let checkSumOne = (value.split('').slice(0, -2)
				.reduce(
					(summ, symbol, index) =>
						[7, 2, 4, 10, 3, 5, 9, 4, 6, 8][index] * Number(symbol) + summ,
					0)
				% 11) % 10;

			let checkSumTwo = (value.split('').slice(0, -1)
				.reduce(
					(summ, symbol, index) =>
						[3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8][index] * Number(symbol) + summ,
					0)
				% 11) % 10;

			return (checkSumOne === Number(value[10]) && checkSumTwo === Number(value[11]));
		}
	}

	return (
		<div className='form-containe'>
			<div className='my-document-add'><ComponentImage img source={MyDocument} width="100px" height="100px" /></div>
			<form >
				<div className='part-left'>

					<div className='part_input'>
						<p className='title-input title-input_inn'>ИНН компании*</p>
						<input className='field-input1 inn' type="number" onChange={() => (checkInnShort())} required="required" placeholder="10 цифр" />

						<p className='title-input'>Тональность</p>
						<select className='tonality '>
							<option value="">Любая</option>
							<option value="1">Позитивная</option>
							<option value="2">Негативная</option>
						</select>
						<p className='title-input'>Количество документов в выдаче*</p>
						<input className='field-input1' type="number" required="required" placeholder="от 1 до 1000" />
					</div>

					<div className='part_search'>
						<p className='title-input title-input_search'>Диапазон поиска*</p>
						<div className='part_search_block-input'>
							<input className='field-input2' name="date" type="text" onfocus="(this.type='date')" onblur="if(!this.value)this.type='text'" required="required" placeholder="Дата начала" />
							<input className='field-input2' name="date" type="text" onfocus="(this.type='date')" onblur="if(!this.value)this.type='text'" required="required" placeholder="Дата конца" />
						</div>
					</div>

				</div>


				<div className='part-right'>

					<div className='part_checkbox'>
						<div className='checkbox'><label><input type="checkbox" className='square' />Признак максимальной полноты</label></div>
						<div className='checkbox'><label><input type="checkbox" className='square' />Упоминания в бизнес-контенте</label></div>
						<div className='checkbox'><label><input type="checkbox" className='square' />Главная роль в публикации</label></div>
						<div className='checkbox'><label><input type="checkbox" className='square' />Публикации только с риск-факторами</label></div>
						<div className='checkbox'><label><input type="checkbox" className='square' />Включать технические новости рынков</label></div>
						<div className='checkbox'><label><input type="checkbox" className='square' />Включать анонсы и календари</label></div>
						<div className='checkbox'><label><input type="checkbox" className='square' />Включать сводки новостей</label></div>
					</div>


					<div className='btn'>
						<CustomButton variant='blue'>Поиск</CustomButton><br />
						<p>* Обязательные к заполнению поля</p>
					</div>

				</div>

			</form >
			<div className='my-guy-add'><ComponentImage img source={MyGuy} width="100%" height="auto" /></div>
		</div >
	)
}

export default SearchForm