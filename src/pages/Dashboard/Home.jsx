import React, { useState } from 'react'
import { ModeIcon,SaveImgIcon,GifImgIcon,StatsImgIcon,SmileIcon,DateIcon } from '../../assets/images/icons'
import Avatar from '../../assets/images/Avatar.svg'
import Button from '../../components/button'
import Designsta from '../../assets/images/designsta.svg'
import Cloutexhibition from '../../assets/images/cloutexhibition.svg'
import CreativePhoto from '../../assets/images/creativePhoto.svg'
import Kebab from '../../assets/images/kebab.png'
import PostItem from '../../components/PostItem'


function Home() {
  const [postValue,setPostValue] = useState("")
  const [postList,setPostList]=useState([
    {
      id:1,
      name:"Designsta",
      imgUrl:Designsta,
      email:"@inner · 25m",
      description:"Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      commentCount:"10",
      replyCount:"1",
      likeCount:"8", 
      uploadCount:null,
      statisticCount:null,
      postImg:null
    },
    {
      id:2,
      name:"cloutexhibition",
      imgUrl:Cloutexhibition,
      email:"@cloutexhibition · 1h",
      description:"Обетда.....Кечиринглар",
      commentCount:"10",
      replyCount:"1",
      likeCount:"8  ", 
      uploadCount:null,
      statisticCount:null,
      postImg:null
    },
    {
      id:3,
      name:"CreativePhoto",
      imgUrl:CreativePhoto,
      email:"@inner · 25m",
      description:"Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      commentCount:"10",
      replyCount:"1",
      likeCount:"8", 
      uploadCount:null,
      statisticCount:null,
      postImg:Kebab
    },
  ])
  return ( 
  <div className='w-[80%]'>
    <div className='w-[70%] border-r-[1px] border-slate-500 h-[100vh] overflow-y-auto'>
      <div className='sticky z-50 top-0 bg-white p-[20px] border-b-[1px] border-slate-500 flex justify-between items-center'>
        <h2 className='text-[24px] leading-[31px] font-bold'>Home</h2>
        <button><ModeIcon/></button>
      </div>
      <form className='pb-[46px] relative pl-[26px] flex items-start space-x-[15px] border-b-[1px] border-slate-500'>
        <img src={Avatar} alt="Avatar-Icon" width={60} height={60}/>
        <div className='flex flex-col w-full mt-[11px] '>
          <input onChange={(e) => setPostValue(e.target.value)} className='text-[#828282] mb-[51px] text-[22px] font-semibold placeholder:text-[#828282] outline-none'  type="text" placeholder='What’s happening' name='postValue' />
      <div className='flex space-x-[20px]'>
        <label>
          <input type="file" className='hidden' />
          <SaveImgIcon/>
        </label>
        <label>
          <input type="file" className='hidden' />
          <GifImgIcon/>
        </label>
        <label>
          <input type="file" className='hidden' />
          <StatsImgIcon/>
        </label>
        <label>
          <input type="file" className='hidden' />
          <SmileIcon/>
        </label>
        <label>
          <input type="file" className='hidden' />
          <DateIcon/>
        </label>
       
      </div>
        </div>
        <Button extraStyle={'w-[108px] duration-300  absolute right-[18px] bottom-[5px] ${postValue ? "" :"opacity-[40%]"}'} title={"Tweet"} type={"submit"}/>
      </form>
      <ul>{postList.length>0 && postList.map(item =><PostItem key={item.id} item={item}/>)}</ul>
    </div>
    <div className='w-[30%]'></div>
  </div>
    
     
  )
}

export default Home