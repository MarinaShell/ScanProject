import { fontSize } from '@mui/system'
import React from 'react'

export const ComponentHeader = () => {
	return (<div>
		<h1 style={{ fontSize: 60 }} > {props.headerTextName}</h1>
	</div >)
}
