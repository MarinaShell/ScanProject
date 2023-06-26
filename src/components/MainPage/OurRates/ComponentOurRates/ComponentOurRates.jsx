import React from 'react'
import ComponentImage from '../../../ComponentImage/ComponentImage';
import ComponentText from '../../../CustomComponents/ComponentText/ComponentText';
import { CustomButton } from '../../../CustomComponents/CustomButton/CustomButton'
import { CustomCard } from '../../../CustomComponents/CustomCard/CustomCard'
import './ComponentOurRates.css'
import { Colors } from '../../../../theme/Colors/Colors';
import galka from './galka.svg'

const ComponentOurRates = (props) => {
	return (
		<CustomCard style ={{  width:"415px",
                               height:"540px"}}>
            <div class ="header" style = {{backgroundColor:props.color}}>
                <div>
                    <ComponentText style = {{fontSize:"30px", 
                                             fontWeight: "500",
                                             lineHeight:"36px",
                                             marginTop:"20px",
                                             marginLeft:"20px",
                                             color:props.colorText}}>
                        {props.header}
                    </ComponentText>
                    <ComponentText style = {{fontSize:"18px", 
                                             whiteSpace:"nowrap",
                                             lineHeight:"21px",
                                             marginTop:"20px",
                                             marginBottom:"20px",
                                             marginLeft:"20px",
                                             color:props.colorText}}>
                        {props.text}
                    </ComponentText>
                </div>
                <div>
                    <ComponentImage source = {props.source}>
                    </ComponentImage>
                </div>
            </div>
            <div class = "flex top">
                <div>
                    <ComponentText style = {{fontSize:"30px", 
                                            lineHeight:"36px",
                                             whiteSpace:"nowrap"}}>
                        {props.price}
                    </ComponentText>
                </div>
                <div>
                    <ComponentText style = {{fontSize:"25px", 
                                            lineHeight:"36px",
                                            whiteSpace:"nowrap",
                                            marginLeft:"20px",
                                            color:Colors.colorGray                                            
                                            }}>
                        <strike>{props.priceOld}</strike>
                    </ComponentText>
                </div>
            </div>
            <div>
                <ComponentText style = {{fontSize:"18px", 
                                         whiteSpace:"nowrap",
                                         marginTop: "10px"}}>
                    {props.priceIn }
                </ComponentText>
            </div>
            <div>
                <ComponentText style = {{fontSize:"20px", 
                                         whiteSpace:"nowrap",
                                         marginTop: "40px",
                                         lineHeight:"24px",
                                         textAlign: "left",
                                         fontWeight: "500",
                                         fontStyle:"italic"}}>
                    В тариф входит:
                </ComponentText>
            </div>
            <div>
                <ComponentText style = {{fontSize:"18px", 
                                         whiteSpace:"nowrap",
                                         lineHeight:"22px",
                                         textAlign: "left"}}>
                                            <ul>
                                                <li class = "flex">
                                                    <div><ComponentImage source = {galka}>
                                                         </ComponentImage>
                                                    </div>
                                                     <div class = "li_div">{props.list1}</div>
                                                </li>
                                                <li class = "flex"> 
                                                <div><ComponentImage source = {galka}>
                                                     </ComponentImage>
                                                    </div>
                                                     <div class = "li_div">{props.list2}</div>
                                                </li>
                                                <li class = "flex"> 
                                                <div><ComponentImage source = {galka}>
                                                     </ComponentImage>
                                                    </div>
                                                     <div class = "li_div">{props.list3}</div>
                                                </li>
                                            </ul>
                   
                </ComponentText>
            </div>
            <CustomButton variant={props.buttonStyle} >
                {props.button}
            </CustomButton>
        </CustomCard>
	)
}

export default ComponentOurRates