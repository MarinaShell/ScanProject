import React from "react";
import "./SearchForm.css";
import { CustomButton } from "../../CustomComponents/CustomButton/CustomButton";
import { HistogramsSearchBody } from "./HistogramsSearchBody";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Histograms } from "../../../store/Slicers/HistogramsSlicer";
import { ObjectSearch } from "../../../store/Slicers/ObjectSearchSlicer";
import InputMask from 'react-input-mask';
import ComponentDate from './ComponentDate';
import ComponentImage from '../../CustomComponents/ComponentImage/ComponentImage';
import MyDocument from './images/Document.svg';


const SearchForm = () => {
    const dispatch = useDispatch();
    const accessToken = localStorage.getItem("accessToken");

    const navigate = useNavigate();

    const body = () => {
        const inn = document.querySelector("#inn").value;
        const tonality = document.querySelector("#tonality").value;
        const count = document.querySelector("#count").value;
        const startDate = document.querySelector("#startDate").value;
        const endDate = document.querySelector("#endDate").value;

		
        // console.log(HistogramsSearchBody(inn, tonality, count, startDate, endDate))
        return HistogramsSearchBody(inn, tonality, count, startDate, endDate)
    };
    // console.log(body())
    
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
							id="inn"
							placeholder="ИНН"
							mask="9999999999"
							pattern="^\d{10}$"
							required
						/>

						<p className='title-input'>Тональность</p>
						<select className='tonality ' id="tonality">
							<option value="">Любая</option>
							<option value="1">Позитивная</option>
							<option value="2">Негативная</option>
						</select>
						<p className='title-input'>Количество документов в выдаче*</p>
						<InputMask className='field-input-doc'
							type="text"
							id="count"
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

							<ComponentDate />
							<ComponentDate />

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

                        <div className="btn">
                            <CustomButton
                                variant="blue"
                                onClick={() => {
                                    dispatch(Histograms({accessToken: accessToken, body: body()}));
                                    dispatch(ObjectSearch({accessToken: accessToken, body: body()}));
                                    navigate("/result");
                                }}
                            >
                                Поиск
                            </CustomButton>
                            <br />
                            <p>* Обязательные к заполнению поля</p>
                        </div>
                    </div>
                </form>
            </div>
    );
};

export default SearchForm;
