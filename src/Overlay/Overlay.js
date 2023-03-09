import React from "react";
import Header from "../Header/Header";

function Overlay() {
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "100%",
            }}
            className='container mx-auto'
        >
            <Header />
        </div>
    );
}

export default Overlay;
