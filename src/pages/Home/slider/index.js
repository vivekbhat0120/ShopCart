import React from "react"; // Import the React library for creating components
import Slider from "react-slick"; // Import the Slider component from the react-slick library for carousel functionality
import "./style.css"; // Import external CSS file for styling the slider

// Import banner images to be displayed in the slider
import Banner1 from "../../../assets/images/bn1.png";
import Banner2 from "../../../assets/images/bn2.png";
import Banner3 from "../../../assets/images/bn3.png";
import Banner4 from "../../../assets/images/bn4.png";
import Banner5 from "../../../assets/images/bn5.png";
import Banner6 from "../../../assets/images/bn6.png";

// Functional component to display the home page slider
const HomeSlider = () => {
  // Configuration settings for the slider
  var settings = {
    dots: true, // Enable navigation dots below the slider
    infinite: true, // Allow infinite looping of slides
    speed: 900, // Set the transition speed to 900ms
    slidesToShow: 1, // Display one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 5000, // Set the autoplay interval to 5 seconds
  };

  return (
    <section className="homeSlider">
      {" "}
      {/* Main container for the slider */}
      <div className="container-fluid">
        {" "}
        {/* Fluid container for full-width layout */}
        <Slider {...settings} className="sliderMain">
          {" "}
          {/* Slider component with applied settings */}
          {/* Individual banner slides */}
          <div className="sliderItem">
            <img src={Banner1} alt="Banner1" className="w-100" />{" "}
            {/* Display the first banner image */}
          </div>
          <div className="sliderItem">
            <img src={Banner2} alt="Banner2" className="w-100" />{" "}
            {/* Display the second banner image */}
          </div>
          <div className="sliderItem">
            <img src={Banner3} alt="Banner3" className="w-100" />{" "}
            {/* Display the third banner image */}
          </div>
          <div className="sliderItem">
            <img src={Banner4} alt="Banner4" className="w-100" />{" "}
            {/* Display the fourth banner image */}
          </div>
          <div className="sliderItem">
            <img src={Banner5} alt="Banner5" className="w-100" />{" "}
            {/* Display the fifth banner image */}
          </div>
          <div className="sliderItem">
            <img src={Banner6} alt="Banner6" className="w-100" />{" "}
            {/* Display the sixth banner image */}
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeSlider; // Export the HomeSlider component for use in other parts of the application
