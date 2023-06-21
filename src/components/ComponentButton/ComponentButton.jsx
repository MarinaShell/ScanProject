import React from 'react'
import { Button } from '@mui/material';

const ComponentButton = (props) => {
    let {children, ...others} = props;
  return (
    <Button {...others}>
        text
    </Button>
  )
}

export {ComponentButton}
