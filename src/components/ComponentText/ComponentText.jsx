import { fontSize } from '@mui/system'
import React from 'react'

const ComponentText = (props) => {
	let { children, ...others } = props
	return (
		<div>
			<h1 style={{

			}}{...others}>
				{children}
			</h1>
		</div>)
}
export default ComponentText;
