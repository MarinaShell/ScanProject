import React from "react";
import ComponentImage from "../../../CustomComponents/ComponentImage/ComponentImage";
import ComponentText from "../../../CustomComponents/ComponentText/ComponentText";
import { CustomButton } from "../../../CustomComponents/CustomButton/CustomButton";
import { CustomCard } from "../../../CustomComponents/CustomCard/CustomCard";
// import "./ComponentOurRates.css";
import { Colors } from "../../../../theme/Colors/Colors";
import galka from "../../../../media/galka.svg";
import { useTheme, useMediaQuery } from "@mui/material";

const ComponentOurRates = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <CustomCard
            style={{
                padding: "0 0 20px",
                border: "2px solid" + props.color,
                flex: 1,
                maxWidth: "500px",
                minHeight: "540px",
                marginBottom: "20px",
            }}
        >
            <div style={{display: "flex", flexDirection: "column"}}>
                <div
                    style={{
                        flexGrow: 2,
                        backgroundColor: props.color,
                        display: "flex",
                        position: "relative",
                    }}
                >
                    <div style={{ padding: "30px 24px", flexGrow: 2 }}>
                        <ComponentText
                            style={{
                                padding: 0,
                                textAlign: "left",
                                fontSize: matches ? "20px" : "30px",
                                fontWeight: "500",
                                lineHeight: matches ? "24px" : "36px",
                                color: props.colorText,
                            }}
                        >
                            {props.header}
                        </ComponentText>

                        <ComponentText
                            style={{
                                textAlign: "left",
                                fontSize: "18px",
                                lineHeight: "21px",
                                marginTop: "20px",
                                color: props.colorText,
                            }}
                        >
                            {props.text}
                        </ComponentText>
                    </div>
                    <div
                        style={{
                            flexGrow: 1,
                            padding: "15px",
                            alignItems: "center",
                            position: matches ? "absolute" : "static",
                            right: "-20px",
                            top: "0",
                        }}
                    >
                        <ComponentImage
                            width={matches ? "60%" : "auto"}
                            source={props.source}
                        ></ComponentImage>
                    </div>
                </div>
                <div style={{flex: 1, display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            display: "flex",
                            padding: "20px 20px 0",
                            columnGap: "20px",
                        }}
                    >
                        <div>
                            <ComponentText
                                style={{
                                    fontSize: "30px",
                                    lineHeight: "36px",
                                }}
                            >
                                {props.price}
                            </ComponentText>
                        </div>
                        <div>
                            <ComponentText
                                style={{
                                    fontSize: "25px",
                                    lineHeight: "36px",
                                    color: Colors.colorGray,
                                }}
                            >
                                <strike>{props.priceOld}</strike>
                            </ComponentText>
                        </div>
                    </div>
                    <div style={{ padding: "0 20px 20px" }}>
                        <ComponentText
                            style={{
                                fontSize: "18px",
                                textAlign: "left",
                            }}
                        >
                            {props.priceIn}
                        </ComponentText>
                    </div>
                    <div style={{ padding: "20px 20px 0" }}>
                        <ComponentText
                            style={{
                                fontSize: "20px",
                                lineHeight: "24px",
                                textAlign: "left",
                                fontWeight: "500",
                            }}
                        >
                            В тариф входит:
                        </ComponentText>
                    </div>

                    <div style={{ padding: "0 20px 20px" }}>
                        <ul style={{ padding: 0, textAlign: "left" }}>
                            <li className="flex">
                                <div
                                    style={{
                                        display: "flex",
                                        columnGap: "10px",
                                    }}
                                >
                                    <div>
                                        <ComponentImage
                                            source={galka}
                                        ></ComponentImage>
                                    </div>
                                    <div className="li_div">{props.list1}</div>
                                </div>
                            </li>
                            <li className="flex">
                                <div
                                    style={{
                                        display: "flex",
                                        columnGap: "10px",
                                    }}
                                >
                                    <div>
                                        <ComponentImage
                                            source={galka}
                                        ></ComponentImage>
                                    </div>
                                    <div class="li_div">{props.list2}</div>
                                </div>
                            </li>
                            <li className="flex">
                                <div
                                    style={{
                                        display: "flex",
                                        columnGap: "10px",
                                    }}
                                >
                                    <div>
                                        <ComponentImage
                                            source={galka}
                                        ></ComponentImage>
                                    </div>
                                    <div class="li_div">{props.list3}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <CustomButton variant={props.buttonStyle} style={{margin: "0 25px"}}>
                        {props.button}
                    </CustomButton>
                </div>
            </div>
        </CustomCard>
    );
};

export default ComponentOurRates;
