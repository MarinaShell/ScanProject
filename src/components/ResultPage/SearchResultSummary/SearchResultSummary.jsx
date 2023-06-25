import React from "react";
import ComponentHeader from "../../CustomComponents/ComponentHeader/ComponentHeader";
import ComponentText from "../../CustomComponents/ComponentText/ComponentText";
import RightArrow from "../../../media/RightArrow.svg";
import LeftArrow from "../../../media/LeftArrow.svg";
import { CustomCard } from "../../CustomComponents/CustomCard/CustomCard";
import { Colors } from "../../../theme/Colors/Colors";
import { DataCarousel } from "./DataCArousel/DataCarousel";
import { CustomButton } from "../../CustomComponents/CustomButton/CustomButton";

const SearchResultSummary = () => {
  const toLeft = () => {
    document.querySelector(".alice-carousel__prev-btn").click()
  }
  const toRight = () => {
    document.querySelector(".alice-carousel__next-btn").click()
  }
  return (
    <>
      <ComponentHeader style={{ textAlign: "left", fontSize: "30px" }}>
        общая сводка
      </ComponentHeader>
      <ComponentText style={{ textAlign: "left", marginTop: "17px" }}>
        Найдено 4 221 вариантов
      </ComponentText>
      <div style={{display: "flex"}}>
      <CustomButton onClick={toLeft} style={{flexGrow: 0, padding: 0}}><img src={LeftArrow} alt="LeftArrow" /></CustomButton>
        <CustomCard
          style={{
            margin: "20px 0",
            boxShadow: "none",
            padding: 0,
            border: "2px solid" + Colors.colorAqua,
            display: "flex",
            flexGrow: 3
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: Colors.colorAqua,
              padding: "17px 28px",
              textAlign: "start",
              color: Colors.colorWhite,
            }}
          >
            <ComponentText>Период</ComponentText>
            <ComponentText style={{margin: "26px 0"}}>Всего</ComponentText>
            <ComponentText>Риски</ComponentText>
          </div>
          <div style={{ flexGrow: 3, position: "relative" }}>
            <DataCarousel />
          </div>
        </CustomCard>
        <CustomButton onClick={toRight} style={{flexGrow: 0}}><img src={RightArrow} alt="RightArrow" /></CustomButton>
      </div>
      
    </>
  );
};

export { SearchResultSummary };
