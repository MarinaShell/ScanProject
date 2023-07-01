import * as React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ComponentText from "../../../CustomComponents/ComponentText/ComponentText";
import { useTheme, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

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

    const Items = histograms.data
        ? histograms.data[0].data.map((value, idx) => (
              <div
                  key={idx}
                  style={{
                      marginTop: "18px",
                      //   marginRight: "-20px",
                      borderRight: "1px solid grey",
                      display: "flex",
                      justifyContent: "center",
                      flexBasis: "auto",
                      flexDirection: matches ? "row" : "column",
                  }}
              >
                  <ComponentText>
                      {new Date(value.date).toLocaleDateString()}
                  </ComponentText>
                  <ComponentText style={{ margin: matches ? "0" : "26px 0" }}>
                      {value.value}
                  </ComponentText>
                  <ComponentText>
                      {histograms.data[1].data[idx].value}
                  </ComponentText>
              </div>
          ))
        : [];

    const responsive = {
        0: { items: 1 },
        768: { items: 4 },
        1024: { items: 8 },
    };

    return histograms.data ? (
        <AliceCarousel
            items={Items}
            responsive={responsive}
            autoHeight
            disableDotsControls
            autoWidth={false}
            activeIndex={0}
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
    ) : (
        <CircularProgress />
    );
};

export { DataCarousel };
