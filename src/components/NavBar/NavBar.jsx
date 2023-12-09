import React from 'react'
import './NavBar.css'
import ProfileHead from './ProfileHead/ProfileHead'

const NavBar = () => {
  return (
    <section className='navBar'>

        {/* Search Bar  */}
        <form className='searchSection'>
        <span className='searchIcon'>
        <input
            type='text'
            placeholder='Explore Y community'
            className='searchBar'

        ></input>
        </span>
        </form>

        {/* Upload Button */}
        <button className='navButton'>
            <img src='public/assets/icons/NavBar/upload.svg' 
                alt='Upload Icon'
            ></img>
        </button>

        {/* Notification Button */}
        <button className='navButton'>
            <img src='public/assets/icons/NavBar/notification.svg' 
                alt='Notification Icon'
            ></img>
        </button>


        {/* Profile Section  */}
        <ProfileHead></ProfileHead>

    </section>
  )
}

export default NavBar