import React from "react";
import { Card } from "@mui/material";

const CustomCard = (props) => {
    console.log(props);
    let { children, ...others } = props;
    return <Card {...others}>{children}</Card>;
};

export { CustomCard };
