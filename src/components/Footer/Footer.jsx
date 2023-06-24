import React from "react";
import { CustomContainer } from "../CustomComponents/CustomContainer/CustomContainer";
import BottomLogo from "../../media/BottomLogo.svg";
import styles from "./Footer.module.css";
import { Colors } from "../../theme/Colors/Colors";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <div
            style={{ backgroundColor: Colors.colorAqua }}
            className={styles.footer}
        >
            <CustomContainer>
                <div className={styles.footerContent}>
                    {matches ? (
                        <img src={BottomLogo} alt="logo" />
                    ) : (
                        <div className={styles.footerImage}>
                            <img src={BottomLogo} alt="logo" />
                        </div>
                    )}

                    <div className={styles.footerText}>
                        <p>г. Москва, Цветной б-р, 40 </p>
                        <p>+7 495 771 21 11 </p>
                        <p>info@skan.ru</p>
                        <p className={styles.copyright}>Copyright. 2022</p>
                    </div>
                </div>
            </CustomContainer>
        </div>
    );
};

export { Footer };

