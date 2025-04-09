import React from "react";
import "./style.css";
import Rating from '@mui/material/Rating';

import tp1 from "../../../assets/images/fast-food.png";
import tp2 from "../../../assets/images/vegetable.png";
import tp3 from "../../../assets/images/bn1.png";
import { Link } from "react-router-dom";

const TopProducts = (props) => {
    return (
    <>
       <div className="TopSellingBox">
        <h3>{props.title}</h3>

          <div className="items d-flex align-items-center">
                <div className="img">
                    <Link to="">
                    <img src={tp1} className="w-100" />
                    </Link>
                </div>

                <div className="info px-4">
                    <Link to=""><h4>Food Item & Beverages</h4></Link>
                    <Rating 
                    name="half-rating-read" 
                    defaultValue={4.5} 
                    precision={0.5} 
                    readOnly 
                    size="small"/>

                    <div className="d-flex align-items-center">
                        <span className="price text-g font-weight-bold">Rs.1599</span>
                        <span className="oldPrice">2199</span>
                    </div>
                </div>
          </div>
          <div className="items d-flex align-items-center">
                <div className="img">
                    <Link to="">
                    <img src={tp1} className="w-100" />
                    </Link>
                </div>

                <div className="info px-4">
                    <Link to=""><h4>Food Item & Beverages</h4></Link>
                    <Rating 
                    name="half-rating-read" 
                    defaultValue={4.5} 
                    precision={0.5} 
                    readOnly 
                    size="small"/>

                    <div className="d-flex align-items-center">
                        <span className="price text-g font-weight-bold">Rs.1599</span>
                        <span className="oldPrice">2199</span>
                    </div>
                </div>
          </div>
          <div className="items d-flex align-items-center">
                <div className="img">
                    <Link to="">
                    <img src={tp1} className="w-100" />
                    </Link>
                </div>

                <div className="info px-4">
                    <Link to=""><h4>Food Item & Beverages</h4></Link>
                    <Rating 
                    name="half-rating-read" 
                    defaultValue={4.5} 
                    precision={0.5} 
                    readOnly 
                    size="small"/>

                    <div className="d-flex align-items-center">
                        <span className="price text-g font-weight-bold">Rs.1599</span>
                        <span className="oldPrice">2199</span>
                    </div>
                </div>
          </div>
       </div>
    </>
    );
};

export default TopProducts;