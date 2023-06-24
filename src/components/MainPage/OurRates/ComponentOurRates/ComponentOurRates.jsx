import React from 'react'
import ComponentImage from '../../../ComponentImage/ComponentImage';
import ComponentHeaderText from '../../../ComponentHeaderText/ComponentHeaderText';
import ComponentText from '../../../ComponentText/ComponentText';
import { CustomButton } from '../../../ComponentButton/ComponentButton'
import { CustomCard } from '../../../CustomComponents/CustomCard/CustomCard'

const ComponentOurRates = (props) => {
	return (
		<CustomCard>
            <div>
                <div>
                    <ComponentHeaderText>
                        {props.header}
                    </ComponentHeaderText>
                    <ComponentText>
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