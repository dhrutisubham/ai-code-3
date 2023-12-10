import React from 'react'
import './UpdateBar.css'
import '../NavBar/NavBar.css'
import ProfileHead from '../NavBar/ProfileHead/ProfileHead'


const updatesList={
  '8 Sep, 2024': 'Yo Reddit! What’s a small thing that anyone can do at nearly anytime to improve their mood and make',
  '1 Feb, 2024': 'Any mechanical keyboard enthusiasts in design?',
  '17 Oct, 2024': 'Understanding color theory: the color wheel and finding complementary colors',
  '22 Oct, 2024': 'The More Important the Work, the More Important the Rest',
  '24 May, 2024': 'How to design a product that can grow itself 10x in year:',
}

const eventsList={
  'Dec 7, 2023 23:30': 'Design Workshop',
  'Dec 30, 2023 07:00': 'Basics of DSA',
}

const UpdateBar = () => {
  return (
    <div className='flex flex-col h-full gap-3 basis-1/4 max-w-xs overflow-visible'>

      <section className='navSection'>
        {/* Upload Button */}
        <button className='navButton'>
              <img src='assets/icons/NavBar/upload.svg' 
                  alt='Upload Icon'
                  className='icon'

              ></img>
          </button>

          {/* Notification Button */}
          <button className='navButton'>
              <img src='assets/icons/NavBar/notification.svg' 
                  alt='Notification Icon'
                  className='icon'
              ></img>
          </button>


          {/* Profile Section  */}
          <ProfileHead></ProfileHead>

        </section>

        {/* Right Pane */}
        <section className='grow-[9999] h-full flex flex-col gap-3 overflow-auto'>
          
          {/* Quick Updates  */}
          <section className='quickUpdates'>
            <h2 className='font-bold px-4 pb-3 pt-5'>Quick Updates</h2>
            <section className='flex flex-col overflow-scroll snap-none p-0'>
              {
                Object.entries(updatesList).map(([date, update])=>(
                  <a className='update' href="./">
                    <h5 className='w-full text-xs  text-grey3'>{date}</h5>
                    <h3 
                    className='font-regular text-black1 font-medium w-full text-sm truncate'>
                      {update}</h3>
                  </a>
                ))
              }
            </section>

            <a href='./'
            className='text-blue1 text-sm px-4 pb-4 pt-4 text-[0.8rem] font-medium underline hover:bg-white2'>
              Show More
            </a>
          </section>

          {/* Event Details  */}
          <section className='quickUpdates'>
            <h2 className='font-bold px-4 pb-3 pt-5'>Event Details</h2>
            <section className='flex flex-col overflow-scroll snap-none p-0'>

            {
              Object.entries(eventsList).map(([date, update])=>(
                <section className='event'>
                  <section className='eventDetail'>
                    <h3 
                    className='font-regular text-black1 font-medium w-full text-sm truncate'>
                      {update}</h3>
                    <h5 className='w-full text-xs text-grey6'>{date}</h5>
                  </section>
                  <button className='outline_btn'>
                    Know More
                  </button>
                </section>
              ))
            }
            </section>

            <a href='./'
            className='text-blue1 text-sm px-4 py-4 text-[0.8rem] font-medium underline hover:bg-white2'>
              Show More
            </a>
          </section>

          <button className='black_btn'>
            Ask Trumio
          </button>

        </section>
      
      </div>
  )
}

export default UpdateBar