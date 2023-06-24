import React from "react";
import ComponentHeader from "../CustomComponents/ComponentHeader/ComponentHeader";
import ComponentText from "../CustomComponents/ComponentText/ComponentText";
import AliceCarousel from "react-alice-carousel";
import RightArrow from "../../media/RightArrow.svg";
import LeftArrow from "../../media/LeftArrow.svg";

const SearchResultSummary = () => {
    return (
        <>
            <ComponentHeader style={{ textAlign: "left", fontSize: "30px" }}>
                общая сводка
            </ComponentHeader>
            <ComponentText style={{ textAlign: "left", marginTop: "17px" }}>
                Найдено 4 221 вариантов
            </ComponentText>
        </>
    );
};

export { SearchResultSummary };
