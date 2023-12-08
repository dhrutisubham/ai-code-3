import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <section className='navBar'>
        <form className='searchSection'>
        <input
            type='text'
            placeholder='Explore Y community'
            className='searchBar'

        ></input>
        </form>
        <button className='navButton'>
            <img src='public/assets/icons/NavBar/upload.svg' 
                alt='Upload Icon'
            ></img>
        </button>
        <button className='navButton'>
            <img src='public/assets/icons/NavBar/notification.svg' 
                alt='Notification Icon'
            ></img>
        </button>
    </section>
  )
}

export default NavBar