import React from "react";
import ComponentHeader from "../../CustomComponents/ComponentHeader/ComponentHeader";
import ComponentText from "../../CustomComponents/ComponentText/ComponentText";
import AliceCarousel from "react-alice-carousel";
import RightArrow from "../../../media/RightArrow.svg";
import LeftArrow from "../../../media/LeftArrow.svg";
import { CustomCard } from "../../CustomComponents/CustomCard/CustomCard";
import { Colors } from "../../../theme/Colors/Colors";

const SearchResultSummary = () => {
  return (
    <>
      <ComponentHeader style={{ textAlign: "left", fontSize: "30px" }}>
        общая сводка
      </ComponentHeader>
      <ComponentText style={{ textAlign: "left", marginTop: "17px" }}>
        Найдено 4 221 вариантов
      </ComponentText>
      <div>
        <CustomCard
          style={{
            marginTop: "20px",
            boxShadow: "none",
            padding: 0,
            border: "2px solid" + Colors.colorAqua,
            display: "flex"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              backgroundColor: Colors.colorAqua,
              padding: "17px 28px",
              textAlign: "start",
              color: Colors.colorWhite
            }}
          >
            <ComponentText>Период</ComponentText>
            <ComponentText style={{margin: "26px 0"}}>Всего</ComponentText>
            <ComponentText>Риски</ComponentText>
          </div>
          <div>
            <AliceCarousel>

            </AliceCarousel>
          </div>
        </CustomCard>
      </div>
    </>
  );
};

export { SearchResultSummary };
