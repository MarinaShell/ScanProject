import * as React from "react";
import ComponentText from "../../../CustomComponents/ComponentText/ComponentText";
import { useTheme, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import Carousel from "better-react-carousel";

const DataCarousel = () => {
    const [histograms, setHistograms] = useState([]);

    useEffect(() => {
        axios
            .get("/Mocks/response-objectsearch-histograms.json")
            .then((result) => setHistograms(result.data))
            .catch((error) => console.log(error));
    }, []);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    const itemsLength = histograms.data ? histograms.data[0].data.length : 0
    
    const breakpoints = [
        { breakpoint: 1920, rows: 1, cols: itemsLength > 8 ? 8 : itemsLength },
        { breakpoint: 1440, rows: 1, cols: itemsLength > 8 ? 8 : itemsLength },
        { breakpoint: 1024, rows: 1, cols: itemsLength > 6 ? 6 : itemsLength },
        { breakpoint: 768, rows: 1, cols: 1 },
        { breakpoint: 355, rows: 1, cols: 1 },
    ];

    return histograms.data ? (
        <Carousel style={{width: "100% !important"}} hideArrow={true} cols={8} responsiveLayout={breakpoints} scrollSnap={true} mobileBreakpoint={354} >
            {histograms.data[0].data.map((value, idx) => (
                <Carousel.Item key={idx}>
                    <div
                        style={{
                            marginRight: matches ? 0 : "20px",
                            paddingRight: matches ? 0 : "20px",
                            borderRight: matches ? "none" : "1px solid grey",
                            display: "flex",
                            alignItems: "center",
                            columnGap: matches ? "60px" : 0,
                            height: matches ? "65px" : "auto",
                            flexDirection: matches ? "row" : "column",
                        }}
                    >
                        <ComponentText >
                            {new Date(value.date).toLocaleDateString()}
                        </ComponentText>
                        <ComponentText
                            style={{ margin: matches ? "0" : "26px 0"}}
                        >
                            {value.value}
                        </ComponentText>
                        <ComponentText >
                            {histograms.data[1].data[idx].value}
                        </ComponentText>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
        
    ) : (
      
        <CircularProgress />
    );
};

export { DataCarousel };
