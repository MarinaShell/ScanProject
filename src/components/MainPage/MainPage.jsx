import React from "react";
import { CustomContainer } from "../CustomComponents/CustomContainer/CustomContainer";
import OurGoals from "./OurGoals/OurGoals";
import MainPageMedia from "./MainPageMedia/MainPageMedia";
import OurRates from "./OurRates/OurRates";

const MainPage = () => {
    return (
        <CustomContainer>
          <OurGoals />
          <MainPageMedia />
          <OurRates />       
            
        </CustomContainer>
    );
};

export { MainPage };

