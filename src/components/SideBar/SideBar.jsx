import React, { useState } from 'react'
import './SideBar.css'
import {Route, Routes, Link, useNavigate} from "react-router-dom";
import Home from '../../pages/Home/Home'

const navPanelTop={
  'Home': 'home',
  'Questions': 'question',
  'Connections': 'connections',
  'Projects' : 'projects',
}

const navPanelMid={
  'Clubs': ['home'],
  'Societies': ['question'],
}

const navPanelBottom={
  'Trumio Fans': 'fans',
  'Trumio Playground': 'playground',
  'Trumio MarketPlace': 'marketplace',
}

const SideBar = () => {

  const history = useNavigate();

  const [isSelected, setIsSelected] = useState({
    'Home': true,
    'Questions': false,
    'Connections': false,
    'Projects': false,
  });

  const handleOptionClick = (label) => {
    const updatedIsSelected = { ...isSelected };
    Object.keys(updatedIsSelected).forEach((key) => {
      updatedIsSelected[key] = key === label;
    });
    setIsSelected(updatedIsSelected);
  };

  return (

    <>

    <nav className='sideBar'>
      <a className='logoContainer' href='./'>
      <img
        className='trumioLogo'
        src='public/assets/icons/SideBar/TrumioYlogo.svg'
        alt='TrumioY Logo'
      />
      </a>


      {/*Top Options */}
      <section className='flex flex-col drop-shadow bg-white1 z-0 relative pt-2'>
      {
        Object.entries(navPanelTop).map(([label, icon])=>(
          <Link className='option' to={`/${label==='Home'?'':label}`} onClick={() => handleOptionClick(label)}>
            <img
              className='navPanelOptionLogo'
              src={`public/assets/icons/SideBar/Navpanel/${icon}${isSelected[label]?'-selected':''}.svg`}
              alt={`${label} Icon`}
            ></img>
            <span 
            className={`font-${isSelected[label]?'bold text-black1':'regular text-grey6'} text-sm`}>
              {label}</span>
          </Link>
        ))
      }
      </section>


      {/* Middle Dropdown Options */}

      <section className='flex flex-col drop-shadow bg-white1 -z-[8] relative py-2'>
      {
        Object.entries(navPanelMid).map(([label, array])=>(
          <a className='option' href="./">
            <img
              className='navPanelOptionLogo -rotate-90'
              src={`public/assets/icons/SideBar/Navpanel/dropdown.svg`}
              alt={`Dropdown Icon`}
            ></img>
            <span 
            className='font-regular text-grey6 text-sm'>
              {label}</span>
          </a>
        ))
      }
      </section>
      

      {/* Bottom Options */}
      <section className='flex flex-col drop-shadow bg-white1 -z-10 relative pt-2'>
      {
        Object.entries(navPanelBottom).map(([label, icon])=>(
          <a className='option' href={`./${label}`}>
            <img
              className='navPanelOptionLogo'
              src={`public/assets/icons/SideBar/Navpanel/${icon}.svg`}
              alt={`${label} Icon`}
            ></img>
            <span 
            className='font-regular text-blue1 text-sm'>
              {label}</span>
          </a>
        ))
      }
      </section>
    </nav>
    </>
  )
}

export default SideBar