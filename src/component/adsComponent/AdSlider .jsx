import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AdSlider = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div style={{ position: "absolute", top: "70%", width: "100%", textAlign: "center" }}>
                <ul style={{ margin: "0", padding: "0" }}>{dots}</ul>
            </div>
        ),
    };

    return (
        <Slider {...settings} >
            {images.map((img, idx) => (
                <div key={idx}>
                    <img src={img} alt="groupImg" className="rounded-4" style={{ width: "100%", height: "100px", objectFit: "cover" }} />
                </div>
            ))}
        </Slider>
    );
};

export default AdSlider;