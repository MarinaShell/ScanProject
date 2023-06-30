import React from 'react'
import ComponentHeaderText from '../../CustomComponents/ComponentHeaderText/ComponentHeaderText';

function ComponentAuthMedia() {
	return (
		<div><ComponentHeaderText className='font_ferry' style={{
			fontWeight: "900",
			marginTop: "20px",
			textAlign: "left",
			fontFamily: 'Ferry',
			fontStyle: "normal",
			fontWeight: "900",
			fontSize: "45px",
			lineHeight: "72px",
			letterSpacing: "0.02em"


		}}> Для оформления подписки
			<br />на тариф, необходимо <br />авторизоваться.
		</ComponentHeaderText></div >
	)
}

export default ComponentAuthMedia