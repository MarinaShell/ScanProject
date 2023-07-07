import React from "react";
import ComponentImage from "../../CustomComponents/ComponentImage/ComponentImage";
import MyGuy from "./images/guy.svg";
import "./SearchPageMediaImage.css";

function ComponentAuthMediaImages() {
    return (
        <div style={{minWidth: "450px"}}>
            <ComponentImage img source={MyGuy} width="100%" />
        </div>
    );
}

export default ComponentAuthMediaImages;
