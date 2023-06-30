import * as React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ComponentText from "../../../CustomComponents/ComponentText/ComponentText";
import { useTheme, useMediaQuery } from "@mui/material";

const DataCarousel = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    const Items = [
        <div
            style={{
                marginTop: "18px",
                borderRight: "1px solid grey",
                display: "flex",
                flexDirection: matches ? "row" : "column",
                
                // justifyContent: "space-around"
            }}
        >
            <ComponentText style={{flexGrow: 1}}>20.02.2022</ComponentText>
            <ComponentText style={{ margin: matches ? "0" : "26px 0", flexGrow: 2 }}>5</ComponentText>
            <ComponentText style={{flexGrow: 2}}>0</ComponentText>
        </div>,
        <div
            style={{
                marginTop: "18px",
                borderRight: "1px solid grey",
                display: "flex",
                flexDirection: matches ? "row" : "column",
                
                // justifyContent: "space-around"
            }}
        >
            <ComponentText style={{flexGrow: 1}}>20.02.2022</ComponentText>
            <ComponentText style={{ margin: matches ? "0" : "26px 0", flexGrow: 2 }}>5</ComponentText>
            <ComponentText style={{flexGrow: 2}}>0</ComponentText>
        </div>,
        <div
            style={{
                marginTop: "18px",
                borderRight: "1px solid grey",
                display: "flex",
                flexDirection: matches ? "row" : "column",
                
                // justifyContent: "space-around"
            }}
        >
            <ComponentText style={{flexGrow: 1}}>20.02.2022</ComponentText>
            <ComponentText style={{ margin: matches ? "0" : "26px 0", flexGrow: 2 }}>5</ComponentText>
            <ComponentText style={{flexGrow: 2}}>0</ComponentText>
        </div>,
        <div
            style={{
                marginTop: "18px",
                borderRight: "1px solid grey",
                display: "flex",
                flexDirection: matches ? "row" : "column",
                
                // justifyContent: "space-around"
            }}
        >
            <ComponentText style={{flexGrow: 1}}>20.02.2022</ComponentText>
            <ComponentText style={{ margin: matches ? "0" : "26px 0", flexGrow: 2 }}>5</ComponentText>
            <ComponentText style={{flexGrow: 2}}>0</ComponentText>
        </div>,
        <div
            style={{
                marginTop: "18px",
                borderRight: "1px solid grey",
                display: "flex",
                flexDirection: matches ? "row" : "column",
                
                // justifyContent: "space-around"
            }}
        >
            <ComponentText style={{flexGrow: 1}}>20.02.2022</ComponentText>
            <ComponentText style={{ margin: matches ? "0" : "26px 0", flexGrow: 2 }}>5</ComponentText>
            <ComponentText style={{flexGrow: 2}}>0</ComponentText>
        </div>,
        <div
            style={{
                marginTop: "18px",
                borderRight: "1px solid grey",
                display: "flex",
                flexDirection: matches ? "row" : "column",
                
                // justifyContent: "space-around"
            }}
        >
            <ComponentText style={{flexGrow: 1}}>20.02.2022</ComponentText>
            <ComponentText style={{ margin: matches ? "0" : "26px 0", flexGrow: 2 }}>5</ComponentText>
            <ComponentText style={{flexGrow: 2}}>0</ComponentText>
        </div>,
        <div
            style={{
                marginTop: "18px",
                borderRight: "1px solid grey",
                display: "flex",
                flexDirection: matches ? "row" : "column",
                
                // justifyContent: "space-around"
            }}
        >
            <ComponentText style={{flexGrow: 1}}>20.02.2022</ComponentText>
            <ComponentText style={{ margin: matches ? "0" : "26px 0", flexGrow: 2 }}>5</ComponentText>
            <ComponentText style={{flexGrow: 2}}>0</ComponentText>
        </div>,
        <div
            style={{
                marginTop: "18px",
                borderRight: "1px solid grey",
                display: "flex",
                flexDirection: matches ? "row" : "column",
                
                // justifyContent: "space-around"
            }}
        >
            <ComponentText style={{flexGrow: 1}}>20.02.2022</ComponentText>
            <ComponentText style={{ margin: matches ? "0" : "26px 0", flexGrow: 2 }}>5</ComponentText>
            <ComponentText style={{flexGrow: 2}}>0</ComponentText>
        </div>,
        <div
            style={{
                marginTop: "18px",
                borderRight: "1px solid grey",
                display: "flex",
                flexDirection: matches ? "row" : "column",
                
                // justifyContent: "space-around"
            }}
        >
            <ComponentText style={{flexGrow: 1}}>20.02.2022</ComponentText>
            <ComponentText style={{ margin: matches ? "0" : "26px 0", flexGrow: 2 }}>5</ComponentText>
            <ComponentText style={{flexGrow: 2}}>0</ComponentText>
        </div>,
        <div
            style={{
                marginTop: "18px",
                borderRight: "1px solid grey",
                display: "flex",
                flexDirection: matches ? "row" : "column",
                
                // justifyContent: "space-around"
            }}
        >
            <ComponentText style={{flexGrow: 1}}>20.02.2022</ComponentText>
            <ComponentText style={{ margin: matches ? "0" : "26px 0", flexGrow: 2 }}>5</ComponentText>
            <ComponentText style={{flexGrow: 2}}>0</ComponentText>
        </div>,
        <div
            style={{
                marginTop: "18px",
                borderRight: "1px solid grey",
                display: "flex",
                flexDirection: matches ? "row" : "column",
                
                // justifyContent: "space-around"
            }}
        >
            <ComponentText style={{flexGrow: 1}}>20.02.2022</ComponentText>
            <ComponentText style={{ margin: matches ? "0" : "26px 0", flexGrow: 2 }}>5</ComponentText>
            <ComponentText style={{flexGrow: 2}}>0</ComponentText>
        </div>,
        <div
            style={{
                marginTop: "18px",
                borderRight: "1px solid grey",
                display: "flex",
                flexDirection: matches ? "row" : "column",
                
                // justifyContent: "space-around"
            }}
        >
            <ComponentText style={{flexGrow: 1}}>20.02.2022</ComponentText>
            <ComponentText style={{ margin: matches ? "0" : "26px 0", flexGrow: 2 }}>5</ComponentText>
            <ComponentText style={{flexGrow: 2}}>0</ComponentText>
        </div>,
        <div
            style={{
                marginTop: "18px",
                borderRight: "1px solid grey",
                display: "flex",
                flexDirection: matches ? "row" : "column",
                
                // justifyContent: "space-around"
            }}
        >
            <ComponentText style={{flexGrow: 1, fontSize: matches ? "18px" : "20px"}}>20.02.2022</ComponentText>
            <ComponentText style={{ margin: matches ? "0" : "26px 0", flexGrow: 2, fontSize: matches ? "18px" : "20px" }}>5</ComponentText>
            <ComponentText style={{flexGrow: 2, fontSize: matches ? "18px" : "20px"}}>0</ComponentText>
        </div>,

    ];
    const responsive = {
        0: { items: 1 },
        768: { items: 4 },
        1440: { items: 8, itemsFir: "contain" },
    };

    return (
        <>
            <AliceCarousel
                items={Items}
                responsive={responsive}
                autoHeight
                disableDotsControls
                autoWidth={false}
                renderPrevButton={() => {
                    return (
                        <div
                            style={{
                                visibility: "hidden",
                            }}
                        ></div>
                    );
                }}
                renderNextButton={() => {
                    return (
                        <div
                            style={{
                                visibility: "hidden",
                            }}
                        ></div>
                    );
                }}
            />
        </>
    );
};

export { DataCarousel };
