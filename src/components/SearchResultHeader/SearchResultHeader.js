import React from 'react'
import { CustomContainer } from "../CustomComponents/CustomContainer/CustomContainer";
import { ComponentImage } from "../../components/ComponentImage/ComponentImage";
import { ComponentText } from "../../components/ComponentText/ComponentText";
import { ComponentHeader } from "../../components/ComponentHeader/ComponentHeader";


const SearchResultHeader = () => {
    return (
        <CustomContainer>
            <ComponentHeader>
                Ищем. Скоро будут результаты
            </ComponentHeader>

            <ComponentText>
                Поиск может занять некоторое время, просим сохранять терпение.
            </ComponentText>

            <ComponentImage source = {'http://via.placeholder.com/350x250.png'}
            width = {20} height = {20} 
            >
            </ComponentImage>
  
        </CustomContainer>
    );
};

export { SearchResultHeader }