import React from "react";
import { CustomContainer } from "../CustomComponents/CustomContainer/CustomContainer";
import OurGoals from "./OurGoals/OurGoals";
import MainPageMedia from "./MainPageMedia/MainPageMedia";
import OurRates from "./OurRates/OurRates";
import Header from "./Header/Header";
import SearchPage from "../SearchPage/SearchPage";
import AuthPage from "../AuthPage/AuthPage";
import "./MainPage.css";

const MainPage = () => {
	return (

		< CustomContainer className="custom-container">
			<div >
				<div className="header"><Header /></div>
				<div className="auth-page"><AuthPage /></div>
				{/* <div className="our-goals"><OurGoals /></div> */}
				<div className="search-page-container"><SearchPage /></div>
				{/* <div className="main-page-media"><MainPageMedia /></div> */}
				{/* <div className="our-rates"><OurRates /></div > */}
			</div >
		</CustomContainer >
	);
};

export { MainPage };

