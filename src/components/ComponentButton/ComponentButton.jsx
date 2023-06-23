import React from "react";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from '../../theme/Buttons/Buttons'

const CustomButton = (props) => {
    let { children, ...others } = props;
    return (
        <ThemeProvider theme={theme}>
            <Button {...others} variant={props.variant}>{children}</Button>
        </ThemeProvider>
    );
};

export { CustomButton };
