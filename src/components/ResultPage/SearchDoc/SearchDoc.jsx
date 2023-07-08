import React, { useEffect } from "react";
import ComponentSearchDoc from "./ComponentSearchDoc/ComponentSearchDoc";
import ComponentHeaderText from "../../CustomComponents/ComponentHeaderText/ComponentHeaderText";
import { CustomButton } from "../../CustomComponents/CustomButton/CustomButton";
import defaultImage from "../../../media/default-image.svg";
import "./SearchDoc.css";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, useMediaQuery, useTheme } from "@mui/material";
import { Documents, loadMore } from "../../../store/Slicers/DocumentsSlicer";
import { CustomCard } from "../../CustomComponents/CustomCard/CustomCard";

const SearchDoc = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("lg"));
    const accessToken = localStorage.getItem("accessToken");
    const dispatch = useDispatch();
    const encodedIDs = useSelector((state) => state.objectsearch);
    const limitDocs =
        Number(useSelector((state) => state.documents.limitDocs)) - 10;

    useEffect(() => {
        
        if (encodedIDs.success && encodedIDs.objectSearch.items.length > 0) {
            const body = {
                ids: encodedIDs.objectSearch.items.map(
                    (item) => item.encodedId
                ),
            };
            dispatch(Documents({ accessToken: accessToken, body: body }));
        }
    }, [dispatch, encodedIDs?.success, encodedIDs?.objectSearch, accessToken]);

    const docs = useSelector((state) => state.documents);
    const docsCount = docs.documents ? docs.documents.length : 0;
    
    return (
        <>
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
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        columnGap: "60px",
                        rowGap: "30px",
                    }}
                >
                    {docs.documents
                        .slice(
                            0,
                            docsCount <= 10 ? docsCount : docsCount - limitDocs
                        )
                        .map((item) => (
                            <CustomCard
                                key={item.ok.id}
                                style={{
                                    flex: matches ? "100%" : "40%",
                                    height: "fit-content",
                                }}
                            >
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
                                    image={defaultImage}
                                    url={item.ok.url}
                                />
                            </CustomCard>
                        ))}
                </div>
            ) : (
                <CircularProgress />
            )}
            <div style={{ marginTop: "30px" }}>
                <CustomButton
                    style={{display: limitDocs === 0 ? "none" : "block"}}
                    variant="blue"
                    onClick={() => {
                        dispatch(loadMore(limitDocs < 10 ? 0 : limitDocs));
                    }}
                >
                    Показать больше
                </CustomButton>
            </div>
        </>
    );
};

export default SearchDoc;
