import React from "react";
import { Card } from "@mui/material";

const CustomCard = (props) => {
    let { children, ...others } = props;
    return (
        <Card
            {...others}
            variant={"outlined"}
            sx={{
                borderRadius: "10px",
                boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.2)",
                padding: "20px",
                margin: "0 30px"
            }}
        >
            {children}
        </Card>
    );
};

export { CustomCard };
