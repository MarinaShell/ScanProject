import * as React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ComponentText from "../../../CustomComponents/ComponentText/ComponentText";
import { useTheme, useMediaQuery } from "@mui/material";

const DataCarousel = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    props.histograms.data[0].data.map(item => console.log(item.value))
    props.histograms.data[1].data.map(item => console.log(item.value))

    // const Items = props.histograms.data.map(({ total, risks }) => (
    //     <div
    //         style={{
    //             marginTop: "18px",
    //             borderRight: "1px solid grey",
    //             display: "flex",
    //             flexDirection: matches ? "row" : "column",
    //         }}
    //     >
    //         <ComponentText style={{ flexGrow: 1 }}>20.02.2022</ComponentText>
    //         <ComponentText
    //             style={{ margin: matches ? "0" : "26px 0", flexGrow: 2 }}
    //         >
    //             5
    //         </ComponentText>
    //         <ComponentText style={{ flexGrow: 2 }}>0</ComponentText>
    //     </div>
    // ));
// console.log(Items.data)
    const responsive = {
        0: { items: 1 },
        768: { items: 4 },
        1440: { items: 8, itemsFir: "contain" },
    };

    return (
        <>
            <AliceCarousel
                // items={Items}
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
