import React from "react";
import { Container, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const CustomContainer = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    let { children, ...others } = props;

    const responsive =  matches ? {padding: "20px 14px"} : {padding: "20px 60px"}
    return (
        <Container
            {...others}
            maxWidth='false'
            style={responsive}
        >
            {children}
        </Container>
    );
};

export { CustomContainer };
