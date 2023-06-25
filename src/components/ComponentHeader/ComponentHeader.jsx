import { red } from '@mui/material/colors'
import { fontSize } from '@mui/system'
import React from 'react'


export const ComponentHeader = (props) => {
	let { children, ...others } = props
	return (
		<div >
			<p {...others} style={{
				fontFamily: "FERRY",
				color: "black",
				fontWeight: 400,
				lineHeight: "1.1em",
				fontSize: "40px"
			}}>
				{children}
			</p>
		</div >)
}

export default ComponentHeader