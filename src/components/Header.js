import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {HashLink}from "react-router-hash-link"



 class Header extends Component {
  
  render() 
  {
    return (
      <div className='head'>
        <nav>
            <h1>Tech-Y</h1>
            <main>

                <HashLink to="/#home">Home</HashLink> {/* taki upr poch jaaye after clicking on home*/}
                <Link to="/contact">Contact</Link>
                <HashLink to={"/#about"}>About</HashLink>
                <HashLink to={"/#brands"}>Brands</HashLink>
                <Link to="/service">Service</Link>

            </main>
        </nav>
        
        
      </div>
    )
  }
}

export default Header
