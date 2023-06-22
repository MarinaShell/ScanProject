import { fontSize } from '@mui/system'
import React from 'react'

export const ComponentHeader = (props) => {
    let { children, ...others } = props
     return (
    <div>
        <p {...others} size={props.size} > 
            {children}
        </p>
     </div>)
} 
