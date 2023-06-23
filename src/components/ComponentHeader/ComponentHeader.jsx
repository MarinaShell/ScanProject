import { fontSize } from '@mui/system'
import React from 'react'

<<<<<<< HEAD
export const ComponentHeader = (props) => {
    let { children, ...others } = props
     return (
    <div>
        <p {...others} sizeHeader={props.sizeHeader} > 
            {children}
        </p>
     </div>)
} 
=======
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

>>>>>>> 4abd495eebc35043afc42aa9ba96d86cee988c2f
