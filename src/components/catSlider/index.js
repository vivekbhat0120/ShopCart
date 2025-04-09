// index.js
import React from "react";
import "./style.css";
import Slider from "react-slick";

import Trend1 from "../../assets/images/gadget.png";
import Trend2 from "../../assets/images/toys.png";
import Trend3 from "../../assets/images/tools.png";
import Trend4 from "../../assets/images/running-shoes.png";
import Trend5 from "../../assets/images/brand.png";
import Trend6 from "../../assets/images/jewelry.png";
import Trend7 from "../../assets/images/joystick.png";
import Trend8 from "../../assets/images/book.png";
import Trend9 from "../../assets/images/medicine.png";
import Trend10 from "../../assets/images/furniture.png";

const CatSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,              // How long the animation takes
        cssEase: "linear",        // Ensures smooth motion
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false
    };

    return (
        <section className="catSliderSection">
            <div className="container-fluid">
                <h3 className="hd">Trending Categories</h3>
                <Slider {...settings} className="catSliderMain">
                    {[
                        { img: Trend1, name: "Gadgets" },
                        { img: Trend2, name: "Toys" },
                        { img: Trend3, name: "Tools" },
                        { img: Trend4, name: "Shoes" },
                        { img: Trend5, name: "Cloth" },
                        { img: Trend6, name: "Jewelry" },
                        { img: Trend7, name: "Games" },
                        { img: Trend8, name: "Books" },
                        { img: Trend9, name: "Medicine" },
                        { img: Trend10, name: "Furniture" }
                    ].map((item, index) => (
                        <div className="catSliderItem" key={index}>
                            <div className="info">
                                <img src={item.img} alt={item.name} loading="lazy"/>
                                <h5>{item.name}</h5>
                                <p>1000+ Items</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default CatSlider;