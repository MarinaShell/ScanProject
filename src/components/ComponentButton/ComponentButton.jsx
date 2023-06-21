import React from 'react'
import { Button } from '@mui/material';

const ComponentButton = (props) => {
    let {children, ...others} = props;
  return (
    <Button {...others}>
        // В App.js вызвали кнопку и там передали текст "Я кнопка", текст приходит в children
        // а тип кнопки как мы указали variant="contained" идет {...others}
        {children}
    </Button>
  )
}

export {ComponentButton}
