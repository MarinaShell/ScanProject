import React from 'react'
import ComponentImage from '../../../ComponentImage/ComponentImage';
import ComponentHeaderText from '../../../CustomComponents/ComponentHeaderText/ComponentHeaderText';
import ComponentText from '../../../CustomComponents/ComponentText/ComponentText';
import { CustomButton } from '../../../CustomComponents/CustomButton/CustomButton'
import { CustomCard } from '../../../CustomComponents/CustomCard/CustomCard'
import './ComponentOurRates.css'

const ComponentOurRates = (props) => {
	return (
		<CustomCard style ={{
                            borderBottomLeftRadius:0,
                            borderBottomRightRadius:0,
                            width:"415px",
                            height:"540px"}}>
            <div class ="header">
                <div style = {{backgroundColor:props.color}} >
                    <ComponentHeaderText style = {{fontSize:"30px", 
                                                   fontWeight: "500",
                                                   lineHeight:"21px",
                                                   color:props.colorText}}>
                        {props.header}
                    </ComponentHeaderText>
                    <ComponentText style = {{fontSize:"18px", 
                                             whiteSpace:"nowrap"}}>
                        {props.text}
                    </ComponentText>
                </div>
                <div>
                    <ComponentImage source = {props.source}>
                    </ComponentImage>
                </div>
            </div>
            <div>
                <div>
                    <ComponentText>
                        {props.price1}
                    </ComponentText>
                </div>
                <div>
                    <ComponentText>
                        {props.priceOld}
                    </ComponentText>
                </div>
            </div>
            <div>
                <ComponentText>
                    {props.priceIn}
                </ComponentText>
            </div>
            <div>
                <ComponentText>
                    В тариф входит:
                </ComponentText>
            </div>
            <div>
                <ComponentText>
                    {props.list}
                </ComponentText>
            </div>
            <CustomButton variant='blue' >
                {props.button}
            </CustomButton>
        </CustomCard>
	)
}

export default ComponentOurRates