import React from 'react';
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function header() {
    return (
        <div className='header'>
            <img className="header_logo" src="/assets/fclogo.png" alt=""/>
           

           <div className="header_search">
               <input className="header_searchinput" type="text" />
               <SearchIcon className="header_searchicon"/>
            
           </div>
            
           


            <div className="header_nav">
                <div className='header_option'>
                <span className='header_optionlineone'>Hello Furballs</span>
                <span className='header_optionlinetwo'>Sign In</span>
                </div>

                <div className='header_option'>
                <span className='header_optionlineone'>Returns</span>
                <span className='header_optionlinetwo'> Orders</span>
                </div>
               
                <div className='header_option'>
                <span className='header_optionlineone'>Your</span>
                <span className='header_optionlinetwo'>Orders</span>
                </div>


                <div className="header_optioncart">
                    <ShoppingCartIcon/>                 
                <span className="header_optionlinetwo header_cartcount" >0</span>
                </div>
                

            </div>

            
        </div>
    )
}

export default header
