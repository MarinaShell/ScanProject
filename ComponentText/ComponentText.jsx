import { fontSize } from '@mui/system'
import React from 'react'

export const ComponentText = (props) => {
	return (<div>
		<p style={{ fontSize: 20 }} > {props.textName}</p>
	</div>)
}
