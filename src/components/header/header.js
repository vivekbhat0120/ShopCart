// Import required dependencies
import React, { useState } from 'react'; // Import React and useState hook
import '../header/header.css'; // Import CSS for styling
import Nav from './nav/nav'; // Import the navigation component
import Logo from '../../assets/images/logo.png'; // Import website logo
import SearchIcon from '@mui/icons-material/Search'; // Import search icon
import Select from '../selectDrop/select'; // Import custom dropdown select component

// Import images for header icons
import iconCompare from '../../assets/images/compare.png';
import iconFavorite from '../../assets/images/favorite.png';
import iconCart from '../../assets/images/shopping-cart.png';
import iconAccount from '../../assets/images/account.png';

// Import Material UI components for account dropdown menu
import Button from '@mui/material/Button';
import UserIcon from '@mui/icons-material/PersonOutlineOutlined';
import OrderIcon from '@mui/icons-material/LocalMallOutlined';
import VoucherIcon from '@mui/icons-material/LocalOfferOutlined';
import SettingIcon from '@mui/icons-material/TuneOutlined';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';

import ClickAwayListener from '@mui/material/ClickAwayListener'; // Import click-away listener for closing dropdown

// Functional component for the website header
const Header = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false); // State to track dropdown menu visibility

  // List of categories for the search dropdown
  const [categories] = useState([
    'All Categories', 'Clothing', 'Electronics', 'Furniture', 'Jewelry',
    'Shoes', 'Sports', 'Vehicles', 'Books', 'Movies', 'Health & Beauty',
    'Toys', 'Foods', 'Other'
  ]);

  return (
    <>
      <header>
        <div className='container-fluid'> {/* Full-width container */}
          <div className='row'> {/* Row for layout */}
            
            {/* Logo Section */}
            <div className='col-sm-2'>
              <img src={Logo} alt="Website Logo" className='logo'/> {/* Display website logo */}
            </div>

            {/* Search Section */}
            <div className='col-sm-5'>
              <div className='headerSearch d-flex align-items-center'> {/* Search bar container */}
                <Select data={categories} /> {/* Category dropdown */}
                <div className='searchBox'> {/* Input field for search */}
                  <input type='text' placeholder='Search for items...' />
                  <SearchIcon className='searchIcon cursor' /> {/* Search button */}
                </div>
              </div>
            </div>

            {/* Header Icons Section */}
            <div className='col-sm-5 d-flex align-items-center'>
              <div className='ml-auto d-flex align-items-center'>
                <ul className='list list-inline mb-0 headerTabs'>
                  <li className='list-inline-item'>
                    <span>
                      <img src={iconCompare} alt="Compare" /> Compare {/* Compare items */}
                    </span>
                  </li>
                  <li className='list-inline-item'>
                    <span>
                      <img src={iconFavorite} alt="Wishlist" /> Wishlist {/* Favorite items */}
                    </span>
                  </li>
                  <li className='list-inline-item'>
                    <span>
                      <img src={iconCart} alt="Cart" /> Cart {/* Shopping cart */}
                    </span>
                  </li>

                  {/* Account Dropdown */}
                  <ClickAwayListener onClickAway={() => setIsOpenDropDown(false)}>
                    <li className='list-inline-item position-relative'>
                      <span onClick={() => setIsOpenDropDown((prev) => !prev)}>
                        <img src={iconAccount} alt="Account" /> Account {/* Account menu toggle */}
                      </span>

                      {/* Dropdown menu for account options */}
                      {isOpenDropDown && (
                        <ul className='subMenu'>
                          <li><Button className='align-items-center'><UserIcon /> My Account</Button></li>
                          <li><Button><OrderIcon /> Orders</Button></li>
                          <li><Button><VoucherIcon /> Vouchers</Button></li>
                          <li><Button><SettingIcon /> Settings</Button></li>
                          <li><Button><LogoutIcon /> Sign out</Button></li>
                        </ul>
                      )}
                    </li>
                  </ClickAwayListener>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <Nav /> {/* Include the navigation component below the header */}
    </>
  );
};

export default Header; // Export the Header component for use in other files