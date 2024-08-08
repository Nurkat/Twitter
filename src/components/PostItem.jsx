import React from 'react'
import { MoreBtn,CommentIcon,ReplyIcon,LikeIcon,SetIcon,FrameIcon } from '../assets/images/icons'

function PostItem({item}) {
  return (
 <li className=' relative flex items-start space-x-[15px] pt-[10px] px-[25px] pb-[21px] border-b-[1px] border-slate-500'>
    <img src={PostItem.imgUrl} alt="Ava" width={60} height={60} />
    <div>
        <div className='flex space-x-[5px]'>
            <strong>{item.name}</strong>
            <span>{item.email}</span>
        </div>
        <p>{item.description}</p>
        {item.postImg ?<img className='mt-[15px]' src={item.postImg} alt="post-img" width={679} height={453} /> : ""}
        <div className='flex justify-between mt-[22px]'>
            <button className='flex items-center space-x-4'>
                <CommentIcon/>
                <span>{item.commentCount}</span>
            </button>
            <button className='flex items-center space-x-4'>
                <ReplyIcon/>
                <span>{item.replyCount}</span>
            </button>
            <button className='flex items-center space-x-4'>
                <LikeIcon/>
                <span>{item.likeCount}</span>
            </button>
            <button className='flex items-center space-x-4'>
                <SetIcon/>
                <span>{item.commentCount}</span>
            </button>
            <button className='flex items-center space-x-4'>
                <FrameIcon/>
                <span>{item.commentCount}</span>
            </button>
        </div>
    </div>
    <button className='absolute top-[21px] right-[25px]'>
        <MoreBtn />
    </button>
 </li>
  )
}

export default PostItem