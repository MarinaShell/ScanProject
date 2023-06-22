import { fontSize } from '@mui/system'
import React from 'react'

export const ComponentHeader = (props) => {
    let { children, ...others } = props
     return (
    <div>
        <p {...others} sizeHeader={props.sizeHeader} > 
            {children}
        </p>
     </div>)
} 
