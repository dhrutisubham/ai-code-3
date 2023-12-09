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

        

    </section>
  )
}

export default NavBar