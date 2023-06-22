import { fontSize } from '@mui/system'
import React from 'react'

export const ComponentHeader = (props) => {
    let { children, ...others } = props
     return (
    <div>
        <p {...others} style={{ fontSize: 20 }} > 
            {children}
        </p>
     </div>)
} 
