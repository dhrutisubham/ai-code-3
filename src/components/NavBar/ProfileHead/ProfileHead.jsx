import React from 'react'
import './ProfileHead.css'

const userName="Chirag Sharma",
     userTag="MIT",
     userPfp="Chirag-Sharma"


const ProfileHead = () => {
  return (
    <section className='profileHead'>
        <img 
            className='rounded-full'
            src={`/assets/pfp/${userPfp}.png`}
        />
        <div className='flex flex-col gap-[0.03rem]'>
            <h3 className='text-sm truncate'>{userName}</h3>
            <h3 className='text-xs text-red'>{userTag}</h3>

        </div>

    </section>
  )
}

export default ProfileHead