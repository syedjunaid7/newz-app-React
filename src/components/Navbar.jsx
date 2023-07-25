import React from 'react'
import './Navbar.scss'
import {BsSearch} from 'react-icons/bs'
import {BiMenu} from 'react-icons/bi'
import Categories from './caterories/Categories'

function Navbar() {
  return (
    <div className='parent_nav'>
    <div className='navbar'>
        <BiMenu className='menu_icon'/>
        {/* <h1>NewsLive</h1> */}
        <img className='news_logo' src="https://cdn-icons-png.flaticon.com/512/21/21601.png" alt="logo" />
      <BsSearch className='search_icon'/>
    </div>
    <Categories/>

    </div>
  )
}

export default Navbar
