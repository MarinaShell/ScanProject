import React from "react";
import { CustomContainer } from "../../CustomComponents/CustomContainer/CustomContainer";
import ComponentOurRates from "./ComponentOurRates/ComponentOurRates";
import './OurRates.css'

const OurRates = () => {
    return (
        <CustomContainer>
            <div class = "cards">
                <ComponentOurRates 
                    header = "Beginner"
                    text = "Для небольшого исследования"
                    price = "799"
                    priceOld = "1200"
                    priceIn = "или 150Р/мес. при рассрочке 24 мес."
                    list = ""
                    button = "Перейти в личный кабинет"          
                />
                <ComponentOurRates 
                    header = "Pro"
                    text = "Для HR и фрилансеров"
                    price = "1299"
                    priceOld = "2600"
                    priceIn = "или 279Р/мес. при рассрочке 24 мес."
                    list = ""
                    button = "Подробнее"    
                />      
                <ComponentOurRates 
                    header = "Business"
                    text = "Для корпоративных клиентов"
                    price = "2379"
                    priceOld = "3700"
                    priceIn = " "
                    list = ""
                    button = "Подробнее"   
                />            
            </div>
        </CustomContainer>  
    );
};

export default OurRates;