import React from "react";
import Slider from "./slider/index";
import CatSlider from "../../components/catSlider";
import Banners from "../../components/banners/banner";
import Product from "../../components/product/product";

import "./style.css";

const Home = () => {
    return (
      <>
        <Slider/>
        <CatSlider/>
        <Banners/>

        <section className="homeProduct">
            <div className="container-fluid">
              <div className="d-flex align-items-center">
                <h4 className="hd">Popular Products</h4>
                <ul className="list list-inline ml-auto filterTab">
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

                <div className="row productRow">
                  <div className="item">
                    <Product/>
                  </div>

                  <div className="item">
                    <Product/>
                  </div>

                  <div className="item">
                    <Product/>
                  </div>

                  <div className="item">
                    <Product/>
                  </div>

                  <div className="item">
                    <Product/>
                  </div>

                  <div className="item">
                    <Product/>
                  </div>

                  <div className="item">
                    <Product/>
                  </div>

                  <div className="item">
                    <Product/>
                  </div>

                  <div className="item">
                    <Product/>
                  </div>

                  <div className="item">
                    <Product/>
                  </div>
                </div>
            </div>
        </section>
      </>
    )
}

export default Home;