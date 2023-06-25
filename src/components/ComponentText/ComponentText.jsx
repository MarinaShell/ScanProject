import { fontSize } from '@mui/system'
import React from 'react'

const ComponentText = (props) => {
	let { children, ...others } = props
	return (
		<div>
			<h1 {...others} style={{
				fontFamily: "Inter",
				fontWeight: 400,
				fontSize: "20px",
				lineHeight: "24px",
				letterSpacing: "0.01em",
				textTransform: "none"
			}}>
				{children}
			</h1>
		</div >)
}
export default ComponentText;
