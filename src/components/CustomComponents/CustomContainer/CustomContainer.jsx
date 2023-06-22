import React from "react";
import { Container } from "@mui/material";

const CustomContainer = (props) => {
    let { children, ...others } = props;

    return (
        <Container
            {...others}
            // sx={{
            //     marginLeft: '18px',
            //     marginRight: '18px'
            // }} 
            maxWidth='false'

        >
            {children}
        </Container>
    );
};

export { CustomContainer };
