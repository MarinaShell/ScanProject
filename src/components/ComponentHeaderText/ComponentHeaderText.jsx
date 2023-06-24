import React from 'react'

const ComponentHeaderText = (props) => {
	let { children, ...others } = props
	return (
		<div>
			<h1 {...others} style={{
				whiteSpace: "break-spaces",
				fontFamily: "Inter",
				fontWeight: 400,
				lineHeight: "40px",
				textTransform: "none"
			}}>
				{children}
			</h1>
		</div>)
}
export default ComponentHeaderText;

