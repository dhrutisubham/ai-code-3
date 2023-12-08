import React from 'react'
import './SideBar.css'


const navPanel={
  'Home': 'home',
  'Questions': 'question',
  'Connections': 'connections',
  'Projects' : 'projects',
}
const isSelected={
  'Home': true,
  'Questions': false,
  'Connections': false,
  'Projects': false,
};
const SideBar = () => {
  return (
    <section className='sideBar'>
      <a className='logoContainer' href='./'>
      <img
        className='trumioLogo'
        src='public/assets/icons/SideBar/TrumioYlogo.svg'
        alt='TrumioY Logo'
      />
      </a>

      <section className='flex flex-col py-5 drop-shadow bg-white1 z-0 relative'>
      {
        Object.entries(navPanel).map(([label, icon])=>(
          <a className='flex gap-5 hover:bg-white2 pl-7 p-3' href="./">
            <img
              className='navPanelOptionLogo'
              src={`public/assets/icons/SideBar/Navpanel/${icon}${isSelected[label]?'-selected':''}.svg`}
              alt={`${label} Icon`}
            ></img>
            <span 
            className={isSelected[label]?'font-bold text-black1':'font-regular text-grey1'}>
              {label}</span>
          </a>
        ))
      }
      </section>
    </section>
  )
}

export default SideBar