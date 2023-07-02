import React, { useEffect } from "react";
import ComponentAuthMedia from "./ComponentAuthMedia/ComponentAuthMedia";
import ComponentAuthMediaImages from "./ComponentAuthMediaImages/ComponentAuthMediaImages";
import { CustomContainer } from "../CustomComponents/CustomContainer/CustomContainer";
import AuthForm from "./AuthForm/AuthForm";
import "./AuthPage.css";
import { useTheme, useMediaQuery } from "@mui/material";

function AuthPage() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return matches ? (
        <CustomContainer style={{ display: "flex", flexDirection: "column" }}>
            <ComponentAuthMedia />
            <div
                style={{
                    margin: "0 auto",
                    marginBottom: "50px",
                    width: "350px",
                }}
            >
                <AuthForm />
            </div>
            <ComponentAuthMediaImages />
        </CustomContainer>
    ) : (
        <div className="div_main">
            <div className="div_left">
                <div className="font_ferry">
                    <ComponentAuthMedia />
                </div>
                <div className="div_image">
                    <ComponentAuthMediaImages />
                </div>
            </div>
            <div className="div_right">
                <AuthForm />
            </div>
        </div>
    );
}

export default AuthPage;
