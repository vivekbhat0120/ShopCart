import React from "react"; // Import React library
import "./product.css"; // Import CSS styles
import Rating from '@mui/material/Rating'; // Import Material UI rating component
import Button from '@mui/material/Button'; // Import Material UI button component

// Import Material UI icons
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import Tooltip from '@mui/material/Tooltip'; // Import tooltip component for hover effects

import Product1 from "../../assets/images/running-shoes.png"; // Import product image
import { Link } from "react-router-dom"; // Import Link component for navigation

// Define the Product component
const Product = () => {
    return (
        <div className="productThumb"> {/* Product container */}
            <Link> {/* Link wrapper for product */}
                <div className="imgWrapper"> {/* Wrapper for image */}
                    <img src={Product1} alt="Running Shoes" className="w-100"/> {/* Product image */}
                    <div className="overlay"> {/* Overlay for hover effects */}
                        <ul className="list list-inline mb-0">
                            <li className="list-inline-item">
                                <Tooltip title="Add to Wishlist" placement="top"> {/* Tooltip on hover */}
                                    <a className="cursor"> {/* Wishlist button */}
                                        <FavoriteBorderOutlinedIcon/> {/* Heart icon */}
                                    </a>
                                </Tooltip>
                            </li>

                            <li className="list-inline-item">
                                <Tooltip title="Compare" placement="top"> {/* Tooltip for comparison */}
                                    <a className="cursor">
                                        <CompareArrowsOutlinedIcon/> {/* Compare icon */}
                                    </a>
                                </Tooltip>
                            </li>

                            <li className="list-inline-item">
                                <Tooltip title="Quick View" placement="top"> {/* Tooltip for quick view */}
                                    <a className="cursor">
                                        <RemoveRedEyeOutlinedIcon/> {/* Eye icon */}
                                    </a>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </Link>

            <div className="info"> {/* Product details section */}
                <span className="d-block catName">Shoes</span> {/* Product category */}
                <h4 className="title"><Link>Running Shoes</Link></h4> {/* Product title */}
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /> {/* Star rating */}
                <span className="d-block brand text-g">by <Link className="text-g">PUMA</Link></span> {/* Brand name */}

                <div className="d-flex align-items-center mt-3"> {/* Price & button section */}
                    <div className="d-flex align-items-center">
                        <span className="price text-g">Rs.1599</span> {/* Discounted price */}
                        <span className="oldPrice">2199</span> {/* Original price (crossed out) */}
                    </div>
                    <Button className="ml-auto">
                        <ShoppingCartOutlinedIcon/>ADD {/* Add to cart button */}
                    </Button>
                </div>
            </div>
        </div>
    );
};

// Export Product component for use in other parts of the app
export default Product;
