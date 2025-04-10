import React from "react";  // Import React library to use JSX
import SliderBanner from "./slider/index";  // Import the Slider component
import CatSlider from "../../components/catSlider";  // Import category slider component
import Banners from "../../components/banners/banner";  // Import banner component
import Product from "../../components/product/product";  // Import Product component
import Banner4 from "../../assets/images/ban4.png";  // Import banner image

import "./style.css";  // Import stylesheet for styling
import Slider from "react-slick";
import TopProducts from "./TopProducts/index";
import Footer from "../../components/footer/footer";

// Define the Home component
const Home = () => {

  var settings = {
    dots: false, // Show navigation dots below the slider
    infinite: true, // Enable infinite looping of slides
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 4, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    Fade: false,
    arrows: true,
    autoplay: 1000
};
    return (
      <>
        {/* Render the slider component */}
        <SliderBanner/>

        {/* Render the category slider component */}
        <CatSlider/>

        {/* Render the banners component */}
        <Banners/>

        {/* Section for displaying popular products */}
        <section className="homeProduct">
            <div className="container-fluid">
              
{/* ----------------------- Header Popular Products section   --------------------------------- */}

              <div className="d-flex align-items-center">
                <h4 className="hd">Popular Products</h4>

                {/* Filter tabs for product categories */}
                <ul className="list list-inline ml-auto filterTab mb-0">
                  <li className="list-inline-item"><a className="cursor">All</a></li>
                  <li className="list-inline-item"><a className="cursor">Electronics</a></li>
                  <li className="list-inline-item"><a className="cursor">Books</a></li>
                  <li className="list-inline-item"><a className="cursor">Shoes</a></li>
                  <li className="list-inline-item"><a className="cursor">Clothing</a></li>
                  <li className="list-inline-item"><a className="cursor">Medicines</a></li>
                  <li className="list-inline-item"><a className="cursor">Fruits & Vegetables</a></li>
                </ul>
              </div>


{/* ----------------------- Grid layout for product items   --------------------------------- */}
              
              <div className="row productRow">
                {/* Display multiple Product components */}
                <div className="item"><Product tag="Hot"/></div>
                <div className="item"><Product tag="Hot"/></div>
                <div className="item"><Product tag="Sale"/></div>
                <div className="item"><Product tag="New"/></div>
                <div className="item"><Product tag="Hot"/></div>
                <div className="item"><Product tag="Best"/></div>
                <div className="item"><Product tag="New"/></div>
                <div className="item"><Product tag="Hot"/></div>
                <div className="item"><Product tag="Best"/></div>
                <div className="item"><Product tag="Sale"/></div>
              </div>
            </div>
        </section>

{/* ----------------------- Header Daily Best Sells Section   --------------------------------- */}

        <section className="homeProduct HomeProductsRow2 pt-0">
            <div className="container-fluid">
              <div className="d-flex align-items-center">
                <h4 className="hd">Daily Best Sells</h4>

                {/* Filter tabs for product categories */}
                <ul className="list list-inline ml-auto filterTab mb-0">
                  <li className="list-inline-item"><a className="cursor">Featured</a></li>
                  <li className="list-inline-item"><a className="cursor">Popular</a></li>
                  <li className="list-inline-item"><a className="cursor">New added</a></li>
                </ul>
              </div>

                  <div className="row">
                    <div className="col-md-3 p-4">
                      <img src={Banner4} className="w-100"/>
                    </div>
                    <div className="col-md-9">
                      <Slider {...settings} className="productRow">
                      <Product tag="Hot"/>
                      <Product tag="New"/>
                      <Product tag="Best"/>
                      <Product tag="Sale"/>
                            </Slider>
                      </div>
                    </div>
            </div>
        </section>

        {/* ----------------------- Header Top Product Section   --------------------------------- */}

        <section className="topProductsSection">
            <div className="container-fluid">
              <div className="row">
              <div className="col">
                  <TopProducts title="Top Selling"/>
                  </div>

                  <div className="col">
                  <TopProducts title="Top Rated"/>
                  </div>

                  <div className="col">
                  <TopProducts title="Recently Added"/>
                  </div>

                  <div className="col">
                  <TopProducts title="Trending Products"/>
                  </div>
               </div>
            </div>

        </section>
        {/* <hr class="custom-hr"></hr> */}
        <Footer/>
      </>
      
    )
}

// Export the Home component for use in other parts of the application
export default Home;
