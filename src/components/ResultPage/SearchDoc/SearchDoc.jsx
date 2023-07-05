import React, { useEffect } from "react";
import { CustomContainer } from "../../CustomComponents/CustomContainer/CustomContainer";
import ComponentSearchDoc from "./ComponentSearchDoc/ComponentSearchDoc";
import ComponentHeaderText from "../../CustomComponents/ComponentHeaderText/ComponentHeaderText";
import { CustomButton } from "../../CustomComponents/CustomButton/CustomButton";
import image1 from "./image1.svg";
import "./SearchDoc.css";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { Documents } from "../../../store/Slicers/DocumentsSlicer";

const SearchDoc = () => {
    const accessToken = localStorage.getItem("accessToken");
    const dispatch = useDispatch();
    const encodedIDs = useSelector((state) => state.objectsearch);

    useEffect(() => {
        if (encodedIDs.success && encodedIDs.objectSearch.items.length > 0) {
            const body = {
                ids: encodedIDs.objectSearch.items.map(
                    (item) => item.encodedId
                ),
            };
            dispatch(Documents({ accessToken: accessToken, body: body }));
        }
    }, [dispatch, accessToken, encodedIDs]);

    const docs = useSelector((state) => state.documents);

    if (docs.loading && docs.status) {
    }
    return (
        <CustomContainer>
            <div>
                <ComponentHeaderText
                    style={{
                        fontSize: "45px",
                        fontWeight: "500",
                        lineHeight: "54px",
                        marginTop: "20px",
                        marginBottom: "60px",
                        textAlign: "left",
                    }}
                >
                    СПИСОК ДОКУМЕНТОВ
                </ComponentHeaderText>
            </div>
            {!docs.loading && docs.documents !== null ? (
                docs.documents.map((item) => (
                    <div className="cards" key={item.ok.id}>
                        <ComponentSearchDoc
                            textDate={item.ok.issueDate}
                            textSource={item.ok.source.name}
                            textHeader={item.ok.title.text}
                            textType={() => {
                                if (item.ok.attributes.isTechNews)
                                    return "Технические новости";
                                if (item.ok.attributes.isAnnouncement)
                                    return "анонсы и события";
                                if (item.ok.attributes.isDigest)
                                    return "сводки новостей";
                            }}
                            text={item.ok.content.markup}
                            textNumWord={`${item.ok.attributes.wordCount} слов`}
                            image={image1}
                            url={item.ok.url}
                        />
                    </div>
                ))
            ) : (
                <CircularProgress />
            )}
            <div style={{ marginTop: "30px" }}>
                <CustomButton variant="blue">Показать больше</CustomButton>
            </div>
        </CustomContainer>
    );
};

export default SearchDoc;