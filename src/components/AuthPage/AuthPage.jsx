import React from "react";
import ComponentAuthMedia from "./ComponentAuthMedia/ComponentAuthMedia";
import ComponentAuthMediaImages from "./ComponentAuthMediaImages/ComponentAuthMediaImages";
import { CustomContainer } from "../CustomComponents/CustomContainer/CustomContainer";
import AuthForm from "./AuthForm/AuthForm";
import "./AuthPage.css";
import { useTheme, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AuthPage() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const is_Auth = useSelector((state) => state.userInfo.is_Auth);

    if (is_Auth) {
        return <Navigate to={"/"} />;
    }

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
            <div className="div_left" style={{marginRight: matches ? 0 : "60px"}}>
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
