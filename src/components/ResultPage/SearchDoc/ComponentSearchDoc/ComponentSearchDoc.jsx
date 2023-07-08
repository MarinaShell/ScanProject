import React from "react";
import ComponentText from "../../../CustomComponents/ComponentText/ComponentText";
import { CustomButton } from "../../../CustomComponents/CustomButton/CustomButton";
import { Colors } from "../../../../theme/Colors/Colors";
import "./ComponentSearchDoc.css";

const ComponentSearchDoc = (props) => {
    const formattedDate = new Date();
    const parsingXML = (txt) => {
        // console.log(txt)
        const textParser = new DOMParser();
        const doc = textParser.parseFromString(txt, "text/xml");
        // console.log(doc.querySelector("scandoc"));
        let content = "";
        doc.querySelector("scandoc").childNodes.forEach((node) => {
            // console.log(node.childNodes)
            content += node.textContent;

            // if (node.innerHTML.match(/[а-я ]/gi)) {
            //     content += node.innerHTML.match(/[а-я ]/gi).join("");
            // }
        });
        return content.replace(/(<([^>]+)>)/gi, "");
    };

    return (
        <div>
            <div className="flex">
                <div>
                    <ComponentText
                        style={{
                            fontSize: "16px",
                            fontWeight: "500",
                            lineHeight: "20px",
                            marginTop: "5px",
                            textAlign: "left",
                            color: Colors.colorGray,
                        }}
                    >
                        {formattedDate.toDateString(props.textDate)}
                    </ComponentText>
                </div>
                <div>
                    <ComponentText
                        style={{
                            fontSize: "16px",
                            fontWeight: "500",
                            lineHeight: "20px",
                            marginTop: "5px",
                            textAlign: "left",
                            textDecoration: "underline",
                            color: Colors.colorGray,
                        }}
                    >
                        {props.textSource}
                    </ComponentText>
                </div>
            </div>
            <div>
                <ComponentText
                    style={{
                        fontSize: "26px",
                        fontWeight: "500",
                        lineHeight: "36px",
                        marginTop: "20px",
                        textAlign: "left",
                        color: props.colorText,
                    }}
                >
                    {props.textHeader}
                </ComponentText>
            </div>
            <div>
                <ComponentText
                    style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        lineHeight: "15px",
                        marginTop: "20px",
                        marginBottom: "20px",
                        textAlign: "left",
                    }}
                >
                    <span className="span_div">{props.textType}</span>
                </ComponentText>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "150px",
                    borderRadius: "5px",
                    backgroundColor: "#c7c7c7",
                }}
            >
                <img src={props.image} width="10%" />
            </div>

            <div>
                <ComponentText
                    style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        lineHeight: "20px",
                        marginTop: "20px",
                        textAlign: "left",
                        color: props.colorText,
                    }}
                >
                    {parsingXML(props.text)}
                </ComponentText>
            </div>
            <div className="left">
                <CustomButton
                    variant="lightblue"
                    style={{
                        display: props.url.length > 0 ? "block" : "none",
                        margin: "0 auto",
                    }}
                    onClick={() =>
                        window.open(
                            props.url,
                            "_blank",
                            "rel=noopener noreferrer"
                        )
                    }
                >
                    Читать в источнике
                </CustomButton>
            </div>
            <div>
                <ComponentText
                    style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "20px",
                        marginTop: "20px",
                        textAlign: "right",
                        color: Colors.colorGray,
                    }}
                >
                    {props.textNumWord}
                </ComponentText>
            </div>
        </div>
    );
};

export default ComponentSearchDoc;
