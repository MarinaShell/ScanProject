import { fontSize } from '@mui/system'
import React from 'react'

const ComponentHeader = (props) => {
	let { children, ...others } = props
	return (
		<div>
			<h1 {...others} style={{

				fontFamily: "Inter",
				fontWeight: 400,
				lineHeight: "1px",
				textTransform: "none"
			}}  >
				{children}
			</h1>
		</div>)
}
export default ComponentHeader;

