import React from 'react'
import "./Home.css";
import Product from "./Product";


function home() {
    return (
        <div calssName="home">
            <div className="home_container">
                    <img className="home_image" src="/assets/logo1.jpg" alt=""/>

                    <div className="home_row">
                            <Product id="00123" title='Ribbon'price={50.00} image="/category icon/1.png"/>
                            <Product id="00124" title='Dress'price={150.00} image="/category icon/2.png"/>
                            <Product id="00125" title='Dog Foods'price={150.00} image="/category icon/3.png"/>
                           
                         
                        
                        

                    </div>
                    <div className="home_row">
                    <Product id="00126" title="cologne"price={120.00} image="/category icon/4.png"/>
                    <Product id="00127" title='Water melon Toys'price={80.00} image="/category icon/5.png"/>
                           
                           
                            
                    </div>

                   



                </div>           
        </div>
    )
}

export default home
