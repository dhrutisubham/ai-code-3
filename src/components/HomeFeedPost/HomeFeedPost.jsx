import React from 'react'
import './HomeFeedPost.css'

const HomeFeedPost = (post) => {
  return (
    <article className='bg-white1 rounded-lg drop-shadow p-4 px-6 flex flex-col gap-2 pb-6'>
        {/* User Details  */}
        <section className='postProfileHead'>
        <img 
            className='rounded-full aspect-square h-full'
            src={`assets/pfp/${post['user']['userPfp']}.png`}
            alt='Profile Picture'
        />
        <div className='flex flex-col gap-[0.05rem]'>
            <h3 className='text-sm font-medium truncate'>{post['user']['userName']}</h3>
            <h3 className='text-xs text-red'>{post['user']['userTag']}</h3>

        </div>

        </section>

        <h2 className='font-medium text-black3'>{post['postTitle']}</h2>
        
        <p className='text-sm text-grey6'>{post['postDesc']}</p>
        {
            post['postImg'] && (
                <img
                src={post['postImg']}
                alt="Post Image"
                className='rounded-lg mt-2'
                ></img>
            )
        }
        {/* Post Details  */}
        <section className='flex gap-2 text-black2  text-xs font-medium items-center w-full h-max-10 mt-4 min-h-max'>
            <div className='interactionButton'>
                <img 
                    src='/assets/icons/PostDetails/Like_Selected.svg'
                    alt='Like Button'
                    className='interactionIcon'
                />
                <span>{post['postDetails']['likes']}</span>
            </div>
            <div className='interactionButton'>
                <img 
                    src='/assets/icons/PostDetails/Comment.svg'
                    alt='Comment Button'
                    className='interactionIcon'
                />
                <span>{post['postDetails']['comments']}</span>
            </div>
            <div className='interactionButton'>
                <img 
                    src='/assets/icons/PostDetails/Reshare.svg'
                    alt='Reshare Button'
                    className='interactionIcon'
                />
                <span>{post['postDetails']['reshares']}</span>
            </div>
            <div className='interactionButton'>
                <img 
                    src='/assets/icons/PostDetails/Share.svg'
                    alt='Share Button'
                    className='interactionIcon'
                />
                <span>{post['postDetails']['shares']}</span>
            </div>
            <div className='interactionButton'>
                <img 
                    src='/assets/icons/PostDetails/Save.svg'
                    alt='Save Button'
                    className='interactionIcon'
                />
                <span>{post['postDetails']['saves']}</span>
            </div>
            
        </section>
    </article>
  )
}


export default HomeFeedPost