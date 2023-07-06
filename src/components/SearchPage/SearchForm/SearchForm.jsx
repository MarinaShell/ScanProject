import React, { useEffect, useState } from "react";
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
	const [submitEnabled, setSubmitEnabled] = useState(false);
	const [submitEnabledInn, setSubmitEnabledInn] = useState(true);
	const [submitEnabledCount, setSubmitEnabledCount] = useState(true);
	const [submitEnabledData, setSubmitEnabledData] = useState(true);

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

	const checkInputInn = () => {
		const inn = document.querySelector("#inn").value;
        if (inn < 1000000000)
    	    setSubmitEnabledInn(false);
        else
		 	setSubmitEnabledInn(true);
		console.log(submitEnabledInn);	 
	};

	const checkInputCount = () => {
		const count = document.querySelector("#count").value;
        if (count < 1 || count > 1000)
    	    setSubmitEnabledCount(false);
        else
		 	setSubmitEnabledCount(true);
		console.log(submitEnabledCount);	 
	};
	
	const checkInputData = () => {
	    const startDate = document.querySelector("#startDate").value;
        const endDate = document.querySelector("#endDate").value;
		if (startDate === '' ||
			endDate === '')
		{
			setSubmitEnabledData(false);
			console.log(submitEnabledData);
		}	
		else
		{
			const parBegin = Date.parse(startDate);
			console.log(parBegin);
			const parEnd = Date.parse(endDate);
			console.log(parEnd);
			const parNow_date = new Date();
			const parNow = Date.parse(parNow_date);
			console.log(parNow);
			const par1970 = Date.parse('2019-01-01T00:00:00.417Z');
			console.log(par1970);
	
			if (parBegin>parEnd ||
				parBegin<par1970 ||
				parBegin>parNow ||
				parEnd<par1970 ||
				parEnd>parNow)
				setSubmitEnabledData(false);
			else
				 setSubmitEnabledData(true);
			console.log(submitEnabledData);	
		}

 
	};

	const checkInputs = () => {
	    if (submitEnabledCount === false ||
			submitEnabledInn === false ||
			submitEnabledData === false)
    	    setSubmitEnabled(false)
        else
		 	setSubmitEnabled(true);
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
							style = {{borderColor: submitEnabledInn ? "#c7c7c7":"#e61414" }}
							
							type="text"
							maskChar=" "
							name="inn"
							id="inn"
							placeholder="ИНН"
							mask="9999999999"
							pattern="^\d{10}$"
							required
							onChange={() => {
								checkInputInn();
								checkInputs();}}
						/>				

						<p className='title-input'>Тональность</p>
						<select className='tonality ' id="tonality">
							<option value="">Любая</option>
							<option value="1">Позитивная</option>
							<option value="2">Негативная</option>
						</select>
						<p className='title-input'>Количество документов в выдаче*</p>
						<InputMask className='field-input-doc'
							style = {{borderColor: submitEnabledCount ? "#c7c7c7":"#e61414" }}
							type="text"
							id="count"
							required="required"
							placeholder="от 1 до 1000"
							min="1"
							maskChar=" "
							max="1000"
							mask="9999"
							pattern="^\d{4}$"
							onChange={() => {
								checkInputCount();
								checkInputs();}}
						/>
						     
					</div>

					<div className='part_search'>
						<p className='title-input title-input_search'>Диапазон поиска*</p>
						<div className='part_search_block-input'>

							<input type = "date" 
								   style = {{borderColor: submitEnabledData ? "#c7c7c7":"#e61414" }}
								   id ="startDate"
								   onChange={() => {

										checkInputData();
										checkInputs();}}/>
							<input type = "date" 
							       style = {{borderColor: submitEnabledData ? "#c7c7c7":"#e61414" }}
								   id ="endDate"
								   onChange={() => {
								   checkInputData();
								   checkInputs();}}/>

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
								disabled={submitEnabled===false}
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
