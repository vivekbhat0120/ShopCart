import React from "react";
import "./banner.css";

import Ban1 from "../../assets/images/ban1.png";
import Ban2 from "../../assets/images/ban2.png";
import Ban3 from "../../assets/images/ban3.png";

const Banners = () => {
    return (
        <div className="bannerSection">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="box">
                         <img src={Ban1} className="w-100 transition" alt="banner"/>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box">
                         <img src={Ban2} className="w-100 transition" alt="banner"/>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box">
                         <img src={Ban3} className="w-100 transition" alt="banner"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banners;