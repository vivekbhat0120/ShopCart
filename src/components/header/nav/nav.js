import React from "react"; // Import React library
import './nav.css'; // Import the CSS file for styling
import { Link } from "react-router-dom"; // Import Link component for navigation

// Import Material UI components for buttons and icons
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';

// Import an image for the mega menu
import MegaImg from '../../../assets/images/8.png';

// Functional component for the navigation bar
const Nav = () => {
    return (
        <div className='nav d-flex align-items-center'> {/* Main navbar container */}
            <div className='container-fluid'> {/* Full-width container */}
                <div className='row position-relative'> {/* Row for layout positioning */}
                    
                    {/* Category button */}
                    <div className='col-sm-3 part1 d-flex align-items-center'>
                         <Button className='catTab'>
                             <AppsOutlinedIcon/> &nbsp; Browse All Categories <KeyboardArrowDownIcon/>
                         </Button>
                    </div>
                    
                    {/* Navigation menu */}
                    <div className='col-sm-7 part2 position-static'>
                        <nav>
                            <ul className='list list-inline mb-0'> {/* Inline list for menu items */}
                                <li className='list-inline-item'>
                                    <Button><Link to='/'>Home</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to='/'>About</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to='/'>Shop</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to='/'>Vendors</Link></Button>
                                </li>
                                
                                {/* Mega menu dropdown */}
                                <li className='list-inline-item position-static'>
                                    <Button><Link to='/'>Mega Menu <KeyboardArrowDownIcon/></Link></Button>
                                    <div className='dropDown_menu megaMenu w-100'>
                                        <div className='row'>
                                            {/* First column */}
                                            <div className='col'>
                                                <h4 className='text-g'>Electronics & Gadgets</h4>
                                                <ul className='mt-4 mb-0'>
                                                    <li><Link to=''>Gaming</Link></li>
                                                    <li><Link to=''>Mobile Phones</Link></li>
                                                    <li><Link to=''>Audio & Visual</Link></li>
                                                    <li><Link to=''>Home Appliances</Link></li>
                                                    <li><Link to=''>Computers & Peripherals</Link></li>
                                                </ul>
                                            </div>
                                            {/* Second column */}
                                            <div className='col'>
                                                <h4 className='text-g'>Sports & Outdoors</h4>
                                                <ul className='mt-4 mb-0'>
                                                    <li><Link to=''>Gym Equipment</Link></li>
                                                    <li><Link to=''>Yoga & Pilates</Link></li>
                                                    <li><Link to=''>Outdoor Sports</Link></li>
                                                    <li><Link to=''>Indoor Games</Link></li>
                                                    <li><Link to=''>Other Sports</Link></li>
                                                </ul>
                                            </div>
                                            {/* Third column */}
                                            <div className='col'>
                                                <h4 className='text-g'>Foods & Beverages</h4>
                                                <ul className='mt-4 mb-0'>
                                                    <li><Link to=''>Meat & Seafood</Link></li>
                                                    <li><Link to=''>Fruits & Vegetables</Link></li>
                                                    <li><Link to=''>Beverages</Link></li>
                                                    <li><Link to=''>Other Foods</Link></li>
                                                    <li><Link to=''>Other Beverages</Link></li>
                                                </ul>
                                            </div>
                                            {/* Image column */}
                                            <div className='col'>
                                                <img src={MegaImg} className='w-100'/> {/* Display an image in the menu */}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                
                                <li className='list-inline-item'>
                                    <Button><Link to='/'>Blog</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to='/'>Pages <KeyboardArrowDownIcon/></Link></Button>
                                    {/* Dropdown for additional pages */}
                                    <div className='dropDown_menu'>
                                        <ul>
                                            <li><Button><Link to='/'>About Us</Link></Button></li>
                                            <li><Button><Link to='/'>Contact</Link></Button></li>
                                            <li><Button><Link to='/'>My Account</Link></Button></li>
                                            <li><Button><Link to='/'>Login</Link></Button></li>
                                            <li><Button><Link to='/'>Register</Link></Button></li>
                                            <li><Button><Link to='/'>Reset Password</Link></Button></li>
                                            <li><Button><Link to='/'>Privacy Policy</Link></Button></li>
                                            <li><Button><Link to='/'>Terms of Services</Link></Button></li>
                                            <li><Button><Link to='/'>404 Page</Link></Button></li>
                                        </ul>
                                    </div>
                                </li>
                                
                                <li className='list-inline-item'>
                                    <Button><Link to='/'>Contact</Link></Button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    
                    {/* Support section */}
                    <div className='col-sm-2 part3 d-flex align-items-center'>
                        <div className='support d-flex align-items-center ml-auto'>
                            <span> <HeadsetMicOutlinedIcon/></span>
                            <div className='info ml-3'>
                                <h4 className='text-g mb-0'>Support</h4>
                                <p className='mb-0'>24/7 Live Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav; // Export the navigation component