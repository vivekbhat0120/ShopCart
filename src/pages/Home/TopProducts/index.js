import React from "react"; // Import React library for creating components
import "./style.css"; // Import CSS for styling the TopProducts component
import Rating from "@mui/material/Rating"; // Import Rating component from Material-UI for star ratings

// Import images for the product items
import tp1 from "../../../assets/images/fast-food.png";
import tp2 from "../../../assets/images/vegetable.png";
import tp3 from "../../../assets/images/bn1.png";
import { Link } from "react-router-dom"; // Import Link component for navigation

// Define the TopProducts component
const TopProducts = (props) => {
  return (
    <>
      {/* Container for the top products section */}
      <div className="TopSellingBox">
        {/* Display the title passed as a prop */}
        <h3>{props.title}</h3>

        {/* Render individual product items */}
        <div className="items d-flex align-items-center">
          {/* Product image */}
          <div className="img">
            <Link to="">
              <img src={tp1} className="w-100" />
            </Link>
          </div>

          {/* Product information */}
          <div className="info px-4">
            {/* Product name */}
            <Link to="">
              <h4>Food Item & Beverages</h4>
            </Link>

            {/* Star rating for the product */}
            <Rating
              name="half-rating-read"
              defaultValue={4.5} // Default rating value
              precision={0.5} // Allow half-star ratings
              readOnly // Make the rating read-only
              size="small" // Set the size of the rating component
            />

            {/* Display product price and old price */}
            <div className="d-flex align-items-center">
              <span className="price text-g font-weight-bold">Rs.1599</span>{" "}
              {/* Current price */}
              <span className="oldPrice">2199</span> {/* Old price */}
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
            <Link to="">
              <h4>Food Item & Beverages</h4>
            </Link>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
              size="small"
            />

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
            <Link to="">
              <h4>Food Item & Beverages</h4>
            </Link>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
              size="small"
            />

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

// Export the TopProducts component for use in other parts of the application
export default TopProducts;
