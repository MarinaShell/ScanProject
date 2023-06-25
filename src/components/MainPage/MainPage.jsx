import React from "react";
import { CustomContainer } from "../CustomComponents/CustomContainer/CustomContainer";
import OurGoals from "./OurGoals/OurGoals";
import MainPageMedia from "./MainPageMedia/MainPageMedia";
import OurRates from "./OurRates/OurRates";
import Header from "./Header/Header";

const MainPage = () => {
    return (
        <CustomContainer>
          <div> <Header /></div>
          <div> <OurGoals /></div>
          <div> <MainPageMedia /></div>
          
          <OurRates />     
            
        </CustomContainer>
    );
};

export { MainPage };

