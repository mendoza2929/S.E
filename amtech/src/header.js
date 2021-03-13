import React from 'react';
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link } from "react-router-dom";
import { useStateValue } from './StateProvider';


function Header() {

        const [{cart},dispatch ] =useStateValue();



    return (
        <div className='header'>
            <Link to="/">
            <img className="header_logo" src="/assets/fclogo.png" alt=""/>

            </Link>
          
           

           <div className="header_search">
               <input className="header_searchinput" type="text" />
               <SearchIcon className="header_searchicon"/>
            
           </div>
            
           


            <div className="header_nav">
                <Link to="/login">
                <div className='header_option'>
                <span className='header_optionlineone'>Hello Furballs</span>
                <span className='header_optionlinetwo'>Sign In</span>
                </div>
                </Link>

                <div className='header_option'>
                <span className='header_optionlineone'>Returns</span>
                <span className='header_optionlinetwo'> Orders</span>
                </div>
               
                <div className='header_option'>
                <span className='header_optionlineone'>Your</span>
                <span className='header_optionlinetwo'>Orders</span>
                </div>

                 <Link to="/checkout">
                 <div className="header_optioncart">
                    <ShoppingCartIcon/>                 
                <span className="header_optionlinetwo header_cartcount" >{cart?.length}</span>
                </div>  

                 </Link>

               
                

            </div>

            
        </div>
    )
}

export default Header
