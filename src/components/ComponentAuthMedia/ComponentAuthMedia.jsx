import React from 'react'
import ComponentHeader from '../ComponentHeader/ComponentHeader';

function ComponentAuthMedia() {
	return (
		<div>
			<ComponentHeader style={{
				fontSize: "60px",
				whiteSpace: "break-spaces",
				lineHeight: "72px",
				textTransform: "uppercase",
				fontStyle: "normal",
				marginLeft: "50px",
				letterSpacing: "0.01em",
				fontWeight: 900,
				width: "1200px",
				textAlign: "left",
				fontFamily: "FerryBlack"
			}} >Для оформления подписки
				на тариф, необходимо авторизоваться.
			</ComponentHeader></div >
	)
}

export default ComponentAuthMedia