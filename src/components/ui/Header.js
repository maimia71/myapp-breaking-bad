import React from 'react'
import logo from '../../img/logo.png'
import poster from '../../img/poster.png'
import banner from '../../img/banner.jpg'
import './Header.css'
/**
 * you declared {logo}variable, & it contains logo.png image from it's directory, you can use {logo} variable anywhere.
 */

const Header = () => {
    return (
        <div class='banner'>
            {/* <header class='logo'>
                <img src={logo} alt=''></img>
            </header> */}
            <div class='poster'>
                <img src={poster} alt="" />
            </div>
        </div>

    )
}

export default Header
