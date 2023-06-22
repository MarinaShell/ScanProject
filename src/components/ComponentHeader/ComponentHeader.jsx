import { fontSize } from '@mui/system'
import React from 'react'
import './ComponentHeader.css';

export const ComponentHeader = (props) => {
	return (<div>
		<h1 > {props.headerTextName}</h1>
	</div >)
}