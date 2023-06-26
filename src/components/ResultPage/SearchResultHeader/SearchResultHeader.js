import React from 'react'
import { CustomContainer } from "../../CustomComponents/CustomContainer/CustomContainer";
import ComponentImage from "../../CustomComponents/ComponentImage/ComponentImage";
import ComponentText from "../../CustomComponents/ComponentText/ComponentText";
import ComponentHeaderText from "../../CustomComponents/ComponentHeaderText/ComponentHeaderText";
import './SearchResultHeader.css'

import image from './search.svg'

const SearchResultHeader = () => {
    return (
        <CustomContainer>
            <div className = "flex">
                <div className = "text">
                    <ComponentHeaderText>
                        Ищем. Скоро будут результаты
                    </ComponentHeaderText>

                    <ComponentText style = {{fontSize:"20px", 
                                             fontWeight: "540",
                                             lineHeight:"24px",
                                             marginTop: "30px"
                                            }}>
                        Поиск может занять некоторое время, просим сохранять терпение.
                    </ComponentText>

                </div>
                <div class = "image_div">
                    <ComponentImage source = {image} />
                </div>
            </div>
  
        </CustomContainer>
    );
};

export default SearchResultHeader;