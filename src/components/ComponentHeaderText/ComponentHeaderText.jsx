import React from 'react'

const ComponentHeaderText = (props) => {
	let { children, ...others } = props
	return (
		<div>
			<h1 style={{
				whiteSpace: "break-spaces",
				fontFamily: "FerryBlack",
				fontWeight: 900,
				fontSize: "60px",
				lineHeight: "72px",
				textTransform: "uppercase",
				fontStyle: "normal",
				letterSpacing: "0.01em"
			}}{...others}>
				{children}
			</h1>
		</div >)
}
export default ComponentHeaderText;

/* сервис по поиску публикаций о компании по его ИНН */



