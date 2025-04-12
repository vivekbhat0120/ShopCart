import React from "react"; // Import React library to use JSX
import SliderBanner from "./slider/index"; // Import the SliderBanner component for the homepage slider
import CatSlider from "../../components/catSlider"; // Import the category slider component
import Banners from "../../components/banners/banner"; // Import the banners component for promotional banners
import Product from "../../components/product/product"; // Import the Product component to display individual products
import Banner4 from "../../assets/images/ban4.png"; // Import an image for the daily best-sells section

import "./style.css"; // Import the CSS file for styling the Home component
import Slider from "react-slick"; // Import the Slider library for carousel functionality
import TopProducts from "./TopProducts/index"; // Import the TopProducts component for displaying top product categories
import Footer from "../../components/footer/footer"; // Import the Footer component for the page footer

// Define the Home component
const Home = () => {
  // Slider settings for the product carousel
  var settings = {
    dots: false, // Disable navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 500, // Set transition speed to 500ms
    slidesToShow: 4, // Display 4 slides at a time
    slidesToScroll: 1, // Scroll one slide at a time
    Fade: false, // Disable fade effect
    arrows: true, // Enable navigation arrows
    autoplay: 1000, // Set autoplay interval to 1000ms
  };

  return (
    <>
      {/* Render the main slider banner */}
      <SliderBanner />

      {/* Render the category slider for product categories */}
      <CatSlider />

      {/* Render promotional banners */}
      <Banners />

      {/* Section for displaying popular products */}
      <section className="homeProduct">
        <div className="container-fluid">
          {/* Header for the Popular Products section */}
          <div className="d-flex align-items-center">
            <h4 className="hd">Popular Products</h4>

            {/* Filter tabs for product categories */}
            <ul className="list list-inline ml-auto filterTab mb-0">
              <li className="list-inline-item">
                <a className="cursor">All</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Electronics</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Books</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Shoes</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Clothing</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Medicines</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Fruits & Vegetables</a>
              </li>
            </ul>
          </div>

          {/* Grid layout for displaying product items */}
          <div className="row productRow">
            {/* Render multiple Product components with different tags */}
            <div className="item">
              <Product tag="Hot" />
            </div>
            <div className="item">
              <Product tag="Hot" />
            </div>
            <div className="item">
              <Product tag="Sale" />
            </div>
            <div className="item">
              <Product tag="New" />
            </div>
            <div className="item">
              <Product tag="Hot" />
            </div>
            <div className="item">
              <Product tag="Best" />
            </div>
            <div className="item">
              <Product tag="New" />
            </div>
            <div className="item">
              <Product tag="Hot" />
            </div>
            <div className="item">
              <Product tag="Best" />
            </div>
            <div className="item">
              <Product tag="Sale" />
            </div>
          </div>
        </div>
      </section>

      {/* Section for displaying daily best-sells */}
      <section className="homeProduct HomeProductsRow2 pt-0">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h4 className="hd">Daily Best Sells</h4>

            {/* Filter tabs for daily best-sells categories */}
            <ul className="list list-inline ml-auto filterTab mb-0">
              <li className="list-inline-item">
                <a className="cursor">Featured</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Popular</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">New added</a>
              </li>
            </ul>
          </div>

          {/* Layout for daily best-sells section */}
          <div className="row">
            {/* Banner image for daily best-sells */}
            <div className="dailyBanner col-md-3 p-4">
              <img src={Banner4} className="w-100" />
            </div>
            {/* Product carousel for daily best-sells */}
            <div className="col-md-9">
              <Slider {...settings} className="productRow">
                <Product tag="Hot" />
                <Product tag="New" />
                <Product tag="Best" />
                <Product tag="Sale" />
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* Section for displaying top products */}
      <section className="topProductsSection">
        <div className="container-fluid">
          <div className="row">
            {/* Render multiple TopProducts components with different titles */}
            <div className="col">
              <TopProducts title="Top Selling" />
            </div>
            <div className="col">
              <TopProducts title="Top Rated" />
            </div>
            <div className="col">
              <TopProducts title="Recently Added" />
            </div>
            <div className="col">
              <TopProducts title="Trending Products" />
            </div>
          </div>
        </div>
      </section>

      {/* Render the footer */}
      <Footer />
    </>
  );
};

// Export the Home component for use in other parts of the application
export default Home;
