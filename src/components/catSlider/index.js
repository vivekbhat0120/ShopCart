import React from "react"; // Import React library
import "./style.css"; // Import external CSS file for styling
import Slider from "react-slick"; // Import the Slider component from react-slick library

// Import images for different trending categories
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

// Functional component to display a category slider
const CatSlider = () => {
    // Slider settings configuration
    var settings = {
        dots: false, // Hide navigation dots
        infinite: true, // Enable infinite scrolling
        speed: 500, // Transition speed (500ms)
        slidesToShow: 8, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll per action
        autoplay: true, // Enable auto-sliding
        autoplaySpeed: 3000 // Time between slides (3 seconds)
    };

    return (
        <>
        <div className="catSliderSection"> {/* Main container for the slider */}
           <div className="container-fluid"> {/* Fluid container for full-width display */}
               <h3 className="hd">Trending Categories</h3> {/* Heading for the section */}
                <Slider {...settings} className="catSliderMain"> {/* Slider component with settings */}
                      
                    {/* Individual category items */}
                    <div className="catSliderItem">
                        <div className="info">
                            <img src={Trend1}/> {/* Image for category */}
                            <h5>Gadgets</h5> {/* Category name */}
                            <p>1000+ Items</p> {/* Item count */}
                        </div>
                    </div>
                    
                    <div className="catSliderItem">
                        <div className="info">
                            <img src={Trend2}/>
                            <h5>Toys</h5>
                            <p>1000+ Items</p>
                        </div>
                    </div>

                    <div className="catSliderItem">
                        <div className="info">
                            <img src={Trend3}/>
                            <h5>Tools</h5>
                            <p>1000+ Items</p>
                        </div>
                    </div>

                    <div className="catSliderItem">
                        <div className="info">
                            <img src={Trend4}/>
                            <h5>Shoes</h5>
                            <p>1000+ Items</p>
                        </div>
                    </div>

                    <div className="catSliderItem">
                        <div className="info">
                            <img src={Trend5}/>
                            <h5>Cloth</h5>
                            <p>1000+ Items</p>
                        </div>
                    </div>

                    <div className="catSliderItem">
                        <div className="info">
                            <img src={Trend6}/>
                            <h5>Jewelry</h5>
                            <p>1000+ Items</p>
                        </div>
                    </div>

                    <div className="catSliderItem">
                        <div className="info">
                            <img src={Trend7}/>
                            <h5>Games</h5>
                            <p>1000+ Items</p>
                        </div>
                    </div>

                    <div className="catSliderItem">
                        <div className="info">
                            <img src={Trend8}/>
                            <h5>Books</h5>
                            <p>1000+ Items</p>
                        </div>
                    </div>

                    <div className="catSliderItem">
                        <div className="info">
                            <img src={Trend9}/>
                            <h5>Medicine</h5>
                            <p>1000+ Items</p>
                        </div>
                    </div>

                    <div className="catSliderItem">
                        <div className="info">
                            <img src={Trend10}/>
                            <h5>Furniture</h5>
                            <p>1000+ Items</p>
                        </div>
                    </div>
                </Slider>
           </div>
        </div>
      </>
    )
};

export default CatSlider; // Export component for use in other files
