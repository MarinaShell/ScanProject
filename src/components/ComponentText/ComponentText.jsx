import { fontSize } from '@mui/system'
import React from 'react'

export const ComponentText = (props) => {
    let { children, ...others } = props
     return (
    <div>
        <p {...others} sizeText={props.sizeText} > 
            {children}
        </p>
     </div>)
}
