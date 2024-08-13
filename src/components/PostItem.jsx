import React, { useContext } from 'react'
import { MoreBtn,CommentIcon,ReplyIcon,LikeIcon,SetIcon,FrameIcon } from '../assets/images/icons'
import { Context } from '../context/Context'

function PostItem({item}) {
    const {postList,setPostList} = useContext(Context)
    function handleCommentBtnClick(value){
        value.isCommented = !value.isCommented 
        value.commentCount = value.isCommented ? ++value.commentCount : --value.commentCount 
        if (value.commentCount == 0){ value.commentCount = null} 
        setPostList([...postList])  
    }
    function handleReplyBtnClick(value){
        value.isReplyed = !value.isReplyed 
        value.replyCount = value.isReplyed ? ++value.replyCount : --value.replyCount 
        if (value.replyCount == 0){ value.replyCount = null} 
        setPostList([...postList])  
    }
    function handleLikeBtnClick(value){
        value.isLiked = !value.isLiked
        value.likeCount = value.isLiked ? ++value.likeCount : --value.likeCount 
        if (value.likeCount == 0){ value.likeCount = null} 
        setPostList([...postList])  
    }
  return (
 <li className=' relative flex items-start space-x-[15px] pt-[10px] px-[25px] pb-[21px] border-b-[1px] border-slate-500'>
    <img src={PostItem.imgUrl} alt="Ava" width={60} height={60} />
    <div className='w-full'>
        <div className='flex space-x-[5px]'>
            <strong>{item.name}</strong>
            <span>{item.email}</span>
        </div>
        <p>{item.description}</p>
        {item.postImg ?<img className='mt-[15px]' src={item.postImg} alt="post-img" width={679} height={453} /> : ""}
        <div className='flex justify-between mt-[22px] w-full'>
            <button onClick={() =>handleCommentBtnClick(item)} className={'${item.isReplyed ? "text-blue-600" : "text-[#606060]"}  flex items-center space-x-[10px]'}>
                <CommentIcon/>
                <span>{item.commentCount}</span>
            </button>
            <button onClick={() =>handleReplyBtnClick(item)} className={'${item.isCommented ? "text-blue-green" : "text-[#606060]"}  flex items-center space-x-[10px]'}>
                <ReplyIcon/>
                <span>{item.replyCount}</span>
            </button>
            <button onClick={() =>handleLikeBtnClick(item)} className={'${item.isLiked ? "text-blue-red" : "text-[#606060]"}  flex items-center space-x-[10px]'}>
                <LikeIcon/>
                <span>{item.likeCount}</span>
            </button>
            <button className='flex items-center'>
                <SetIcon/>
                <span>{item.commentCount}</span>
            </button>
            <button className='flex items-center '>
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