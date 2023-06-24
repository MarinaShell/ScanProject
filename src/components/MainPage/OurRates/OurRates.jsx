import React from "react";
import { CustomCard } from "../../CustomComponents/CustomCard/CustomCard";
import { Colors } from "../../../theme/Colors/Colors";
import ComponentText from "../../CustomComponents/ComponentText/ComponentText";
import ComponentHeader from "../../CustomComponents/ComponentHeader/ComponentHeader";
import lamp from "../../../media/lamp.svg";

const OurRates = () => {
    return (
        <>
            <ComponentHeader
                style={{
                    textAlign: "left",
                    marginLeft: "30px",
                    textTransform: "uppercase",
                    marginBottom: "50px",
                }}
            >
                наши тарифы
            </ComponentHeader>
            <div style={{ display: "flex" }}>
                <CustomCard
                    style={{
                        padding: 0,
                    }}
                >
                    <CustomCard
                        style={{
                            backgroundColor: Colors.colorYellow,
                            border: `2px ${Colors.colorYellow} solid`,
                            paddingTop: "4px",
                            margin: 0,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            boxShadow: "none",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <ComponentText
                                style={{
                                    fontWeight: 500,
                                    fontSize: "30px",
                                    textAlign: "left",
                                    lineHeight: "21px",
                                    marginTop: "15px",
                                }}
                            >
                                Beginner
                            </ComponentText>

                            <ComponentText
                                style={{
                                    fontSize: "18px",
                                    lineHeight: "21px",
                                    textAlign: "left",
                                    marginTop: "15px",
                                }}
                            >
                                Для небольшого исследования
                            </ComponentText>
                        </div>
                        <div>
                            <img src={lamp} alt="lamp" />
                        </div>
                    </CustomCard>

                    <CustomCard
                        style={{
                            boxShadow: "none",
                            borderRadius: 0,
                            border: 0,
                            padding: 0,
                            paddingTop: "14px",
                            textAlign: "left",
                        }}
                    >
                        <ComponentText style={{ fontSize: "30px", margin: 0 }}>
                            799 &#x20bd;{" "}
                            <strike
                                style={{
                                    fontSize: "25px",
                                    margin: 0,
                                    color: "rgba(0, 0, 0, 0.5)",
                                }}
                            >
                                1200 &#x20bd;
                            </strike>
                        </ComponentText>
                        <ComponentText>
                            или 150 ₽/мес. при рассрочке на 24 мес.
                        </ComponentText>

                        <ComponentText
                            style={{
                                marginTop: "60px",
                                fontWeight: 500,
                                fontSize: "20px",
                            }}
                        >
                            В тариф входит:
                        </ComponentText>
                    </CustomCard>
                </CustomCard>
                <CustomCard
                    style={{
                        padding: 0,
                    }}
                >
                    <CustomCard
                        style={{
                            backgroundColor: Colors.colorYellow,
                            border: `2px ${Colors.colorYellow} solid`,
                            paddingTop: "4px",
                            margin: 0,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            boxShadow: "none",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <ComponentText
                                style={{
                                    fontWeight: 500,
                                    fontSize: "30px",
                                    textAlign: "left",
                                    lineHeight: "21px",
                                    marginTop: "15px",
                                }}
                            >
                                Beginner
                            </ComponentText>

                            <ComponentText
                                style={{
                                    fontSize: "18px",
                                    lineHeight: "21px",
                                    textAlign: "left",
                                    marginTop: "15px",
                                }}
                            >
                                Для небольшого исследования
                            </ComponentText>
                        </div>
                        <div>
                            <img src={lamp} alt="lamp" />
                        </div>
                    </CustomCard>

                    <CustomCard
                        style={{
                            boxShadow: "none",
                            borderRadius: 0,
                            border: 0,
                            padding: 0,
                            paddingTop: "14px",
                            textAlign: "left",
                        }}
                    >
                        <ComponentText style={{ fontSize: "30px", margin: 0 }}>
                            799 &#x20bd;{" "}
                            <strike
                                style={{
                                    fontSize: "25px",
                                    margin: 0,
                                    color: "rgba(0, 0, 0, 0.5)",
                                }}
                            >
                                1200 &#x20bd;
                            </strike>
                        </ComponentText>
                        <ComponentText>
                            или 150 ₽/мес. при рассрочке на 24 мес.
                        </ComponentText>

                        <ComponentText
                            style={{
                                marginTop: "60px",
                                fontWeight: 500,
                                fontSize: "20px",
                            }}
                        >
                            В тариф входит:
                        </ComponentText>
                    </CustomCard>
                </CustomCard>
                <CustomCard
                    style={{
                        padding: 0,
                    }}
                >
                    <CustomCard
                        style={{
                            backgroundColor: Colors.colorYellow,
                            border: `2px ${Colors.colorYellow} solid`,
                            paddingTop: "4px",
                            margin: 0,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            boxShadow: "none",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <ComponentText
                                style={{
                                    fontWeight: 500,
                                    fontSize: "30px",
                                    textAlign: "left",
                                    lineHeight: "21px",
                                    marginTop: "15px",
                                }}
                            >
                                Beginner
                            </ComponentText>

                            <ComponentText
                                style={{
                                    fontSize: "18px",
                                    lineHeight: "21px",
                                    textAlign: "left",
                                    marginTop: "15px",
                                }}
                            >
                                Для небольшого исследования
                            </ComponentText>
                        </div>
                        <div>
                            <img src={lamp} alt="lamp" />
                        </div>
                    </CustomCard>

                    <CustomCard
                        style={{
                            boxShadow: "none",
                            borderRadius: 0,
                            border: 0,
                            padding: 0,
                            paddingTop: "14px",
                            textAlign: "left",
                        }}
                    >
                        <ComponentText style={{ fontSize: "30px", margin: 0 }}>
                            799 &#x20bd;{" "}
                            <strike
                                style={{
                                    fontSize: "25px",
                                    margin: 0,
                                    color: "rgba(0, 0, 0, 0.5)",
                                }}
                            >
                                1200 &#x20bd;
                            </strike>
                        </ComponentText>
                        <ComponentText>
                            или 150 ₽/мес. при рассрочке на 24 мес.
                        </ComponentText>

                        <ComponentText
                            style={{
                                marginTop: "60px",
                                fontWeight: 500,
                                fontSize: "20px",
                            }}
                        >
                            В тариф входит:
                        </ComponentText>
                    </CustomCard>
                </CustomCard>
                
            </div>
        </>
    );
};

export { OurRates };
