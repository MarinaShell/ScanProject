import { fontSize } from '@mui/system'
import React from 'react'

export const ComponentText = (props) => {
    let { children, ...others } = props
     return (
    <div>
        <p {...others} style={{
           fontFamily: "Inter",
           fontWeight: 400,
           lineHeight: "1px",
           textTransform: "none" > 
            {children}
        </p>
     </div>)
}
