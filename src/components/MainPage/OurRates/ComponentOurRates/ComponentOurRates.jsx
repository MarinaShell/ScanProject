import React from "react";
import ComponentImage from "../../../CustomComponents/ComponentImage/ComponentImage";
import ComponentText from "../../../CustomComponents/ComponentText/ComponentText";
import { CustomButton } from "../../../CustomComponents/CustomButton/CustomButton";
import { Colors } from "../../../../theme/Colors/Colors";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import galka from "../../../../media/galka.svg";
import { useTheme, useMediaQuery } from "@mui/material";

const ComponentOurRates = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("lg"));
    return (
        <Card
            style={{
                padding: "0 0 20px",
                border: "2px solid" + props.color,
                flex: 1,
                maxWidth: "415px",
                minWidth: "335px",
                minHeight: "512px",
                marginBottom: "20px",
            }}
        >
            <CardMedia
                style={{
                    flex: 1,
                    backgroundColor: props.color,
                    display: "flex",
                    position: "relative",
                }}
            >
                <div style={{ padding: "30px 24px", flex: 1 }}>
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
                        position: "absolute",
                        right: "10px",
                        top: "5px",
                    }}
                >
                    <ComponentImage
                        width={matches ? "60%" : "auto"}
                        source={props.source}
                    ></ComponentImage>
                </div>
            </CardMedia>
            <CardContent sx={{ maxHeight: "300px", padding: "10px 20px 20px" }}>
                <div>
                    <div style={{ display: "flex" }}>
                        <ComponentText
                            style={{
                                textAlign: "left",
                                fontSize: "30px",
                                lineHeight: "36px",
                            }}
                        >
                            {props.price}
                        </ComponentText>

                        <ComponentText
                            style={{
                                marginLeft: "10px",
                                textAlign: "left",
                                fontSize: "25px",
                                lineHeight: "36px",
                                color: Colors.colorGray,
                            }}
                        >
                            <strike>{props.priceOld}</strike>
                        </ComponentText>
                    </div>
                    <div style={{minHeight: "80px", marginTop: "10px"}}>
                        <ComponentText
                            style={{
                                fontSize: "18px",
                                textAlign: "left",
                            }}
                        >
                            {props.priceIn}
                        </ComponentText>
                    </div>
                </div>
                <div >
                    <ComponentText
                        style={{
                            textWrap: "wrap",
                            fontSize: "20px",
                            lineHeight: "24px",
                            textAlign: "left",
                            fontWeight: "500",
                        }}
                    >
                        В тариф входит:
                    </ComponentText>
                </div>

                <div >
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
                                <div className="li_div">{props.list2}</div>
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
                                <div className="li_div">{props.list3}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </CardContent>
            <CardActions>
                <CustomButton
                    variant={props.buttonStyle}
                    style={{ margin: "0", width: "100%" }}
                >
                    {props.button}
                </CustomButton>
            </CardActions>
        </Card>
    );
};

export default ComponentOurRates;
