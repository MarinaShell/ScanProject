import React from "react";
import ComponentHeaderText from "../CustomComponents/ComponentHeaderText/ComponentHeaderText";
import ComponentText from "../CustomComponents/ComponentText/ComponentText";
import AliceCarousel from "react-alice-carousel";
import RightArrow from "../../media/RightArrow.svg";
import LeftArrow from "../../media/LeftArrow.svg";

const SearchResultSummary = () => {
    return (
        <>
            <ComponentHeaderText style={{ textAlign: "left", fontSize: "30px" }}>
                общая сводка
            </ComponentHeaderText>
            <ComponentText style={{ textAlign: "left", marginTop: "17px" }}>
                Найдено 4 221 вариантов
            </ComponentText>
        </>
    );
};

export { SearchResultSummary };
