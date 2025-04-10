import React from "react";
import "./footer.css";

import Ft1 from "../../assets/images/offer.png";
import Ft2 from "../../assets/images/delivery.png";
import Ft3 from "../../assets/images/deal.png";
import Ft4 from "../../assets/images/collecting.png";
import Ft5 from "../../assets/images/return.png";

import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
// Footer Icons
import { Icon } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
// Social Media Links
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    //-------------------------------- Footer Icons section   ---------------------------------*/}

    <div className="footerWrapper">
      <div className="footerBoxes">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="box d-flex align-items-center w-100">
                <span>
                  <img src={Ft1} />
                </span>
                <div className="info">
                  <h5>Best Prices & Offers</h5>
                  <p>Shop Smart, Save Big!</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="box d-flex align-items-center w-100">
                <span>
                  <img src={Ft2} />
                </span>
                <div className="info">
                  <h5>Free Delivery</h5>
                  <p>Free delivery, easy & fast</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="box d-flex align-items-center w-100">
                <span>
                  <img src={Ft3} />
                </span>
                <div className="info">
                  <h5>Great Daily Deals</h5>
                  <p>Great Deals, EveryDay!</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="box d-flex align-items-center w-100">
                <span>
                  <img src={Ft4} />
                </span>
                <div className="info">
                  <h5>Wide Collections</h5>
                  <p>Wide range, Right fit</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="box d-flex align-items-center w-100">
                <span>
                  <img src={Ft5} />
                </span>
                <div className="info">
                  <h5>Easy Returns</h5>
                  <p>Pick Freely, Return Easily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //--------------------------- Footer section   --------------------------------- */}

      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
                  <Link to="/">
                    <img src={Logo} className="w-100" /></Link>
                    <p>Cartify - Shop Smarter, Faster.</p>
                    <br/>
                    <p><LocationOnIcon/><span>Address:</span> Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
                    <p><CallIcon/><span>Call Us:</span> +91 9876543210</p>
                    <p><EmailIcon/><span>Email:</span> google@example.com</p>
                    <p><WatchLaterIcon/><span>Hours:</span> 09:00 - 18:00 ( Mon - Sat )</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
