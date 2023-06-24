import React from "react";
import { CustomContainer } from "../../CustomComponents/CustomContainer/CustomContainer";
import ComponentOurRates from "./ComponentOurRates/ComponentOurRates";
import ComponentHeaderText from '../../CustomComponents/ComponentHeaderText/ComponentHeaderText';
import './OurRates.css'
import {Colors} from '../../../theme/Colors/Colors'
import pro from './pro.svg'
import business from './business.svg'
import begin from './begin.svg'

const OurRates = () => {
    return (
         <CustomContainer>
            <div>     
                <ComponentHeaderText style = {{fontSize:"45px", 
                                             fontWeight: "500",
                                             lineHeight:"54px",
                                             marginTop:"20px",
                                             marginBottom:"60px",
                                             textAlign:"left"}}>
                    НАШИ ТАРИФЫ
                </ComponentHeaderText>
            </div>
            <div class = "cards">
                <ComponentOurRates 
                    header = "Beginner"
                    text = "Для небольшого исследования"
                    price = "799 Р"
                    priceOld = "1200 Р"
                    priceIn = "или 150Р/мес. при рассрочке 24 мес."
                    button = "Перейти в личный кабинет"  
                    color = {Colors.colorYellow} 
                    colorText = {Colors.colorBlack}
                    buttonStyle = "grey" 
                    list1 = "Безлимитная история запросов"
                    list2 = "Безопасная сделка"
                    list3 = "Поддержка 24/7"            
                    source = {begin}
                    style ={{border:"2px",
                            borderStyle:"solid",
                            boxShadow:"none",
                            borderColor: Colors.colorYellow }}       
                />
                <ComponentOurRates 
                    header = "Pro"
                    text = "Для HR и фрилансеров"
                    price = "1299 Р"
                    priceOld = "2600 Р"
                    priceIn = "или 279Р/мес. при рассрочке 24 мес."
                    color = {Colors.colorLightBlue}
                    colorText = {Colors.colorBlack} 
                    button = "Подробнее"  
                    buttonStyle = "blue"   
                    source = {pro}
                    list1 = "Все пункты тарифа Beginner"
                    list2 = "Экспорт истории"
                    list3 = "Рекомендации по приоритетам"
                />      
                <ComponentOurRates 
                    header = "Business"
                    text = "Для корпоративных клиентов"
                    price = "2379 Р"
                    priceOld = "3700"
                    priceIn = "      "
                    color = {Colors.colorBlack}
                    colorText = {Colors.colorWhite}  
                    button = "Подробнее" 
                    buttonStyle = "blue"  
                    source = {business}
                    list1 = "Все пункты тарифа Pro"
                    list2 = "Безлимитное количество запросов"
                    list3 = "Приоритетная поддержка" />            
            </div>
        </CustomContainer>  
    );
};

export default OurRates;