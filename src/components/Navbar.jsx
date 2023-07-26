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
        <div style={{textAlign : 'center'}}>
        <img className='news_logo' src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Apple_News_icon_%28iOS%29.png" alt="logo" />
        <h5>NEWS App</h5>
        </div>
      
      <BsSearch className='search_icon'/>
    </div>
    <Categories/>

    </div>
  )
}

export default Navbar
