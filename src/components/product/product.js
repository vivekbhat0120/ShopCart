import React from "react";
import "./product.css";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import Tooltip from '@mui/material/Tooltip';

import Product1 from "../../assets/images/running-shoes.png";
import { Link } from "react-router-dom";


const Product = () => {
    return (
    <div className="productThumb">
        <Link>
            <div className="imgWrapper">
                <img src={Product1} alt="" className="w-100"/>
                <div className="overlay">
                    <ul className="list list-inline mb-0">
                        <li className="list-inline-item">
                            <Tooltip title="Add to Wishlist" placement="top">
                            <a className="cursor">
                                <FavoriteBorderOutlinedIcon/>
                            </a>
                            </Tooltip>
                        </li>

                        <li className="list-inline-item">
                        <Tooltip title="Compare" placement="top">
                            <a className="cursor">
                                <CompareArrowsOutlinedIcon/>
                            </a>
                            </Tooltip>
                        </li>

                        <li className="list-inline-item">
                        <Tooltip title="Quick View" placement="top">
                            <a className="cursor">
                                <RemoveRedEyeOutlinedIcon/>
                            </a>
                            </Tooltip>
                        </li>
                    </ul>
                </div>
            </div>
        </Link>
        <div className="info">
            <span className="d-block catName">Shoes</span>
            <h4 className="title"><Link>Running Shoes</Link></h4>
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
            <span className="d-block brand text-g">by <Link className="text-g">PUMA</Link></span> 

            <div className="d-flex align-items-center mt-3">
                <div className="d-flex align-items-center">
                    <span className="price text-g">Rs.1599</span>
                    <span className="oldPrice">2199</span>
                </div>
                <Button className="ml-auto"><ShoppingCartOutlinedIcon/>ADD</Button>
            </div>
            
        </div>
       </div>
    )
};

export default Product;