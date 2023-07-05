import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import ComponentHeaderText from "../../CustomComponents/ComponentHeaderText/ComponentHeaderText";
import ComponentText from "../../CustomComponents/ComponentText/ComponentText";
import RightArrow from "../../../media/RightArrow.svg";
import LeftArrow from "../../../media/LeftArrow.svg";
import { CustomCard } from "../../CustomComponents/CustomCard/CustomCard";
import { Colors } from "../../../theme/Colors/Colors";
import { DataCarousel } from "./DataCArousel/DataCarousel";
import { CustomButton } from "../../CustomComponents/CustomButton/CustomButton";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const SearchResultSummary = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const [objectsTotal, setObjectsTotal] = useState(0);
    const totalDocs = useSelector((state) => state.histograms)
    console.log(totalDocs)
    // useEffect(() => {
    //     axios
    //         .get("/Mocks/response-objectsearch.json")
    //         .then((data) => setObjectsTotal(data.data))
    //         .catch((error) => console.log(error));
    // }, []);


    const toLeft = () => {
        document.querySelector("span[type='prev']").click();
    };
    const toRight = () => {
        document.querySelector("span[type='next']").click();
    };

    return (
        <>
            <ComponentHeaderText
                style={{ textAlign: "left", fontSize: "30px" }}
            >
                общая сводка
            </ComponentHeaderText>
            <ComponentText style={{ textAlign: "left", marginTop: "17px" }}>
                Найдено {objectsTotal.items ? objectsTotal.items.length : 0} вариантов
            </ComponentText>
            <div style={{ display: "flex" }}>
                <CustomButton
                    onClick={toLeft}
                    style={{
                        flexGrow: 0,
                        padding: 0,
                        marginLeft: matches ? "-30px" : 0,
                    }}
                >
                    <img src={LeftArrow} alt="LeftArrow" />
                </CustomButton>
                <CustomCard
                    style={{
                        margin: "20px 0",
                        boxShadow: "none",
                        padding: 0,
                        border: "2px solid" + Colors.colorAqua,
                        display: "flex",
                        flexGrow: 3,
                        flexDirection: matches ? "column" : "row",
                    }}
                >
                    <div
                        style={{
                            flex: 0,
                            display: "flex",
                            flexDirection: matches ? "row" : "column",
                            backgroundColor: Colors.colorAqua,
                            padding: matches ? "17px 5px" : "17px 28px",
                            justifyContent: "space-around",
                            textAlign: "center",
                            color: Colors.colorWhite,
                        }}
                    >
                        <ComponentText
                            style={{ fontSize: matches ? "18px" : "20px" }}
                        >
                            Период
                        </ComponentText>
                        <ComponentText
                            style={{
                                margin: matches ? "0" : "26px 0",
                                fontSize: matches ? "18px" : "20px",
                            }}
                        >
                            Всего
                        </ComponentText>
                        <ComponentText
                            style={{ fontSize: matches ? "18px" : "20px" }}
                        >
                            Риски
                        </ComponentText>
                    </div>
                    <div style={{ flexGrow: 1, alignItems: "middle", marginTop: matches ? 0 : "20px"}}>
                        <DataCarousel />
                    </div>
                </CustomCard>
                <CustomButton
                    onClick={toRight}
                    style={{ flexGrow: 0, marginLeft: matches ? "-10px" : 0 }}
                >
                    <img src={RightArrow} alt="RightArrow" />
                </CustomButton>
            </div>
        </>
    );
};

export { SearchResultSummary };
