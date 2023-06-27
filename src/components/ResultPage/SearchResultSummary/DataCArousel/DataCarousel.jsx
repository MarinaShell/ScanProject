import * as React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ComponentText from "../../../CustomComponents/ComponentText/ComponentText";

const Items = [
  <div style={{marginTop: "18px", borderRight: "1px solid grey"}}>
    <ComponentText>20.02.2022</ComponentText>
    <ComponentText style={{margin: "26px 0"}}>5</ComponentText>
    <ComponentText>0</ComponentText>
  </div>,
  <div style={{marginTop: "18px", borderRight: "1px solid grey"}}>
    <ComponentText>20.02.2022</ComponentText>
    <ComponentText style={{margin: "26px 0"}}>5</ComponentText>
    <ComponentText>0</ComponentText>
  </div>,
  <div style={{marginTop: "18px", borderRight: "1px solid grey"}}>
    <ComponentText>20.02.2022</ComponentText>
    <ComponentText style={{margin: "26px 0"}}>5</ComponentText>
    <ComponentText>0</ComponentText>
  </div>,
  <div style={{marginTop: "18px", borderRight: "1px solid grey"}}>
    <ComponentText>20.02.2022</ComponentText>
    <ComponentText style={{margin: "26px 0"}}>5</ComponentText>
    <ComponentText>0</ComponentText>
  </div>,
  <div style={{marginTop: "18px", borderRight: "1px solid grey"}}>
    <ComponentText>20.02.2022</ComponentText>
    <ComponentText style={{margin: "26px 0"}}>5</ComponentText>
    <ComponentText>0</ComponentText>
  </div>,
  <div style={{marginTop: "18px", borderRight: "1px solid grey"}}>
    <ComponentText>20.02.2022</ComponentText>
    <ComponentText style={{margin: "26px 0"}}>5</ComponentText>
    <ComponentText>0</ComponentText>
  </div>,
  <div style={{marginTop: "18px", borderRight: "1px solid grey"}}>
    <ComponentText>20.02.2022</ComponentText>
    <ComponentText style={{margin: "26px 0"}}>5</ComponentText>
    <ComponentText>0</ComponentText>
  </div>,
  <div style={{marginTop: "18px", borderRight: "1px solid grey"}}>
    <ComponentText>20.02.2022</ComponentText>
    <ComponentText style={{margin: "26px 0"}}>5</ComponentText>
    <ComponentText>0</ComponentText>
  </div>,
  <div style={{marginTop: "18px", borderRight: "1px solid grey"}}>
    <ComponentText>20.02.2022</ComponentText>
    <ComponentText style={{margin: "26px 0"}}>5</ComponentText>
    <ComponentText>0</ComponentText>
  </div>,
  <div style={{marginTop: "18px", borderRight: "1px solid grey"}}>
    <ComponentText>20.02.2022</ComponentText>
    <ComponentText style={{margin: "26px 0"}}>5</ComponentText>
    <ComponentText>0</ComponentText>
  </div>,
  <div style={{marginTop: "18px", borderRight: "1px solid grey"}}>
    <ComponentText>20.02.2022</ComponentText>
    <ComponentText style={{margin: "26px 0"}}>5</ComponentText>
    <ComponentText>0</ComponentText>
  </div>,
  <div style={{marginTop: "18px", borderRight: "1px solid grey"}}>
    <ComponentText>20.02.2022</ComponentText>
    <ComponentText style={{margin: "26px 0"}}>5</ComponentText>
    <ComponentText>0</ComponentText>
  </div>,
  <div style={{marginTop: "18px", borderRight: "1px solid grey"}}>
    <ComponentText>20.02.2022</ComponentText>
    <ComponentText style={{margin: "26px 0"}}>5</ComponentText>
    <ComponentText>0</ComponentText>
  </div>,


];
const DataCarousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 4 },
    1024: { items: 8, itemsFir: "contain" },
  };

  return (
    <>
      <AliceCarousel
        items={Items}
        responsive={responsive}
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
