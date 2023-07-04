import React from "react";
import { CustomContainer } from "../../CustomComponents/CustomContainer/CustomContainer";
import ComponentSearchDoc from "./ComponentSearchDoc/ComponentSearchDoc";
import ComponentHeaderText from "../../CustomComponents/ComponentHeaderText/ComponentHeaderText";
import { CustomButton } from "../../CustomComponents/CustomButton/CustomButton";
import { Colors } from "../../../theme/Colors/Colors";
import image1 from "./image1.svg";
import image2 from "./image2.svg";
import { useEffect, useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import axios from "axios";
import XMLToReact from "xml-to-react";
var userInfoMap = [];

const SearchDoc = () => {
	const [userInfo, setUserInfo] = useState([]); // Состояние инфоблока
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));

	useEffect(() => {
		axios
			.get("/Mocks/response-documents.json") // Запрос
			.then((result) => {
				console.log(setUserInfo(result.data));
				userInfoMap.push(userInfo);
				console.log(userInfoMap);
			}) // получаем данные
			.catch((error) => console.log(error)); // выводим в консоль если получили ошибку вместо данных
	}, []);

	function getData() {
		axios
			.get("/Mocks/response-documents.json") // Запрос
			.then((result) => {
				console.log(setUserInfo(result.data));
				userInfoMap.push(userInfo);
				console.log("add userInfo");
				console.log(userInfoMap);
			}) // получаем данные
			.catch((error) => console.log(error)); // выводим в консоль если получили ошибку вместо данных
	};

	function getType(isTechNews, isAnnouncement, isDigest) {
		{/*console.log(isTechNews);*/ }
		if (Boolean(isTechNews))
			return "Технические новости";
		if (Boolean(isAnnouncement))
			return "Анонсы и события";
		if (Boolean(isDigest))
			return "Сводки новостей";
		return "Новости";
	}

	function getText(text_xml) {
		{/*console.log(text_xml);
        const xmlToReact = new XMLToReact({
            $TextNode:(value) =>({type:'ent', props:{value}},
            {includeRawXmlAsProps:false}
            )
        });
        console.log(xmlToReact.convert({text_xml}));*/}
		return text_xml;
	}

	return (
		<CustomContainer>
			<div>
				<ComponentHeaderText style={{
					fontSize: matches ? "28px" : "45px",
					fontWeight: "500",
					lineHeight: matches ? "33px" : "72px",
					marginTop: "20px",
					marginBottom: "60px",
					textAlign: "left",
				}}>
					СПИСОК ДОКУМЕНТОВ
				</ComponentHeaderText>
			</div>
			<div className="cards" style={{
				display: "flex",
				alignItems: "baseline",
				flexWrap: "wrap",
				fontSize: matches ? "18px" : "20px",
			}}>

				{
					userInfo.map(x =>
						<div style={{
							height: "694px",
							width: matches ? "335px" : "635px",
							marginRight: "-35px",
							textOverflow: "ellipsis",
							overflow: "hidden",

						}}>
							<ComponentSearchDoc
								textDate={new Date(x.ok.issueDate).toLocaleDateString()}
								textSource={x.ok.source.name}
								textSourceUrl={x.ok.url}
								textHeader={x.ok.title.text}
								textType={
									getType(x.ok.attributes.isTechNews,
										x.ok.attributes.isAnnouncement,
										x.ok.attributes.isDigest)}
								text={getText(x.ok.content.markup)}
								textNumWord={x.ok.attributes.wordCount + " слова"}
								image={image1}
							/>
						</div>
					)
				}
			</div>
			<div style={{ marginTop: "30px" }}>
				<CustomButton onClick={() => getData()}
					variant='blue'>
					Показать больше
				</CustomButton>
			</div>
		</CustomContainer >
	);
};

export default SearchDoc;
