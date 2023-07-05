import React from "react";
import "./SearchForm.css";
import { CustomButton } from "../../CustomComponents/CustomButton/CustomButton";
import { HistogramsSearchBody } from "./HistogramsSearchBody";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Histograms } from "../../../store/Slicers/HistogramsSlicer";
import { ObjectSearch } from "../../../store/Slicers/ObjectSearchSlicer";

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
    
        return HistogramsSearchBody(inn, tonality, count, startDate, endDate)
    };
    
    
    return (
        <div>
            <div className="form">
                <form>
                    <div className="part_form1">
                        <p className="title-input">ИНН компании*</p>
                        <input
                            className="field-input1"
                            type="number"
                            id="inn"
                            required="required"
                            placeholder="10 цифр"
                        />
                        <p className="title-input">Тональность</p>
                        <select className="tonality" id="tonality">
                            <option value="any">Любая</option>
                            <option value="positive">Позитивная</option>
                            <option value="negative">Негативная</option>
                        </select>
                        <p className="title-input">
                            Количество документов в выдаче*
                        </p>
                        <input
                            className="field-input1"
                            type="number"
                            id="count"
                            required="required"
                            placeholder="от 1 до 1000"
                            maxLength="10"
                        />

                        <div className="part_form3">
                            <p className="title-input">Диапазон поиска*</p>
                            <div className="part_form3_block-input">
                                <input
                                    className="field-input2"
                                    name="date"
                                    type="date"
                                    id="startDate"
                                    // onFocus="(this.type='date')"
                                    // onBlur="if(!this.value)this.type='text'"
                                    required="required"
                                    placeholder="Дата начала"
                                />
                                <input
                                    className="field-input2"
                                    name="date"
                                    type="date"
                                    id="endDate"
                                    // onFocus="(this.type='date')"
                                    // onBlur="if(!this.value)this.type='text'"
                                    required="required"
                                    placeholder="Дата конца"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="part_form3">
                        <div className="part_form2">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" className="square" />
                                    Признак максимальной полноты
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" className="square" />
                                    Упоминания в бизнес-контенте
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" className="square" />
                                    Главная роль в публикации
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" className="square" />
                                    Публикации только с риск-факторами
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" className="square" />
                                    Включать технические новости рынков
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" className="square" />
                                    Включать анонсы и календари
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" className="square" />
                                    Включать сводки новостей
                                </label>
                            </div>
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
        </div>
    );
};

export default SearchForm;
