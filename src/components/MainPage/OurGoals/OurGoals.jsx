import React from "react";
import { CustomCard } from "../../CustomComponents/CustomCard/CustomCard";
import RightArrow from "../../../media/RightArrow.svg";
import LeftArrow from "../../../media/LeftArrow.svg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const OurGoals = () => {
    const items = [
        <CustomCard>
            <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                architecto odio accusamus voluptatibus unde eum ad, culpa
                temporibus aliquid, quas similique pariatur quasi inventore
                expedita? Ratione doloremque quasi aperiam illo.
            </div>
        </CustomCard>,

        <CustomCard>
            <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                architecto odio accusamus voluptatibus unde eum ad, culpa
                temporibus aliquid, quas similique pariatur quasi inventore
                expedita? Ratione doloremque quasi aperiam illo.
            </div>
        </CustomCard>,

        <CustomCard>
            <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                architecto odio accusamus voluptatibus unde eum ad, culpa
                temporibus aliquid, quas similique pariatur quasi inventore
                expedita? Ratione doloremque quasi aperiam illo.
            </div>
        </CustomCard>,

        
    ];
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3, itemsFit: "contain" },
    };

    
    return (
        <div style={{ position: "relative" }}>
            <AliceCarousel
                autoWidth={false}
                items={items}
                infinite
                responsive={responsive}
                disableDotsControls
                renderPrevButton={() => {
                    return (
                        <div
                            
                            style={{
                                position: "absolute",
                                left: "-10px",
                                top: "40%",
                                cursor: "pointer",
                            }}
                        >
                            <img src={LeftArrow} alt="leftArrow" />
                        </div>
                    );
                }}
                renderNextButton={() => {
                    return (
                        <div
                            
                            style={{
                                position: "absolute",
                                right: "-10px",
                                top: "40%",
                                cursor: "pointer",
                            }}
                        >
                            <img src={RightArrow} alt="RightArrow" />
                        </div>
                    );
                }}
            />
        </div>
    );
};

export default OurGoals;
