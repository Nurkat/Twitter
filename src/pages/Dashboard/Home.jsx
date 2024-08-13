import React, { useContext, useState } from 'react'
import { ModeIcon,SaveImgIcon,GifImgIcon,StatsImgIcon,SmileIcon,DateIcon, MoreIcon, MoreBtn } from '../../assets/images/icons'
import Avatar from '../../assets/images/Avatar.svg'
import Button from '../../components/button'
import PostItem from '../../components/PostItem'
import { Context } from '../../context/Context'
import MushtariyImg from '../../assets/images/mushtariyImg.png'
import ShuhratbekImg from '../../assets/images/shuhratbekImg.png'







function Home() {
  const {postList, setPostList} = useContext(Context)
  const token = JSON.parse(localStorage.getItem("token"))
  const [postValue,setPostValue] = useState("")
  const [postImg, setPostImg] = useState("")

  function handleSubmitPost (e){
    e.preventDefault()
    const data = {
        id:postList.length ? postList[postList.length - 1].id + 1 : 1,
        name:token?.login,
        imgUrl:Avatar,
        email:"@inner · 25m",
        description:e.target.postValue.value,
        commentCount:null,
        replyCount:null,
        likeCount:null, 
        uploadCount:null,
        statisticCount:null,
        postImg:postImg
    }
    setPostList([data, ...postList])
    e.target.reset()
  
     
  }
  return ( 
    <>
  <div className='w-[80%] flex justify-between'>
    <div className='w-[70%] border-r-[1px] border-slate-500 h-[100vh] overflow-y-auto'>
      <div className='sticky z-40 top-0 bg-white p-[20px] border-b-[1px] border-slate-500 flex justify-between items-center'>
        <h2 className='text-[24px] leading-[31px] font-bold'>Home</h2>
        <button><ModeIcon/></button>
      </div>
      <form onSubmit={handleSubmitPost} autoComplete='off' className='pb-[46px] relative pl-[26px] flex items-start space-x-[15px] border-b-[1px] border-slate-500'>
        <img src={Avatar} alt="Avatar-Icon" width={60} height={60}/>
        <div className='flex flex-col w-full mt-[11px] '>
          <input onChange={(e) => setPostValue(e.target.value)} className='text-[#828282] mb-[51px] text-[22px] font-semibold placeholder:text-[#828282] outline-none'  type="text" placeholder='What’s happening' name='postValue' />
      <div className='flex space-x-[20px] w-full'>
        <label>
          <input onChange={(e) => setPostImg(URL.createObjectURL(e.target.files[0]))} type="file" className='hidden' />
          <SaveImgIcon/>
        </label>
        <label>
          <input  type="file" className='hidden' />
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
        <Button extraStyle={'max-w-[108px] duration-300  absolute right-[18px] bottom-[5px] ${postValue ? "" :"opacity-[40%]"}'} title={"Tweet"} type={"submit"}/>
      </form>
      <ul>{postList.length>0 && postList.map(item =><PostItem key={item.id} item={item}/>)}</ul>
    </div>
<div  className='w-[30%] m-[20px] relative'>
  <input className='w-full py-[15px] px-[30px] rounded-[31px] bg-[#EFF3F4] border-none overflow-none '   required type="search" placeholder='Search Twitter'   />
<div className='w-[373px] bg-[#F7F9F9] mt-[20px]   '>
  <h1 className='pl-[17px] font-bold text-[24px] mb-[20px]'>Trends for you</h1>
  <p className='text-[#393B41] text-[16px] pl-[17px] mb-[3px]  font-regular'>Trending in Germany</p>
  <h2 className='text-[20px]  pl-[17px] font-semibold mb-[3px]  '>Revolution</h2>
  <span className='text-[#393B41] text-[16px]  pl-[17px] font-regular'>50.4K Tweets</span>

  <div className='absolute bottom-[20px]  top-[135px]  right-[16px] '>
<MoreBtn />
  </div>
  <p className='text-[#393B41] text-[16px] pl-[17px] mb-[3px]  font-regular'>Trending in Germany</p>
  <h2 className='text-[20px]  pl-[17px] font-semibold mb-[3px]  '>Revolution</h2>
  <span className='text-[#393B41] text-[16px]  pl-[17px] font-regular'>50.4K Tweets</span>

  <div className='absolute bottom-[20px]  top-[135px]  right-[16px]'>
<MoreBtn />
  </div>
</div>
<div className='w-[373px] bg-[#F7F9F9] mt-[40px] '>
  <strong className='pt-[20px] pl-[15px] mb-[30px]'>You might like</strong>
  <div className='flex items-center space-x-4 mt-[35px]'>
  <div>
<img className='pl-[15px]' src={MushtariyImg} alt="" width={60} height={60} />
  </div>
<div>
  <strong>Mushtariy</strong>
  <p>@Mushtar565266</p>
</div>
<button className='text-white p-[10px] rounded-[50px] bg-black text-[14px] font-bold'>Follow</button>
  </div>
  <div className='flex items-center space-x-6 mt-[35px]'>
  <div>
<img className='pl-[15px]' src={ShuhratbekImg} alt="" width={60} height={60} />
  </div>
  <div>
  <strong>Shuhratbek</strong>
  <p>@mrshukhrat</p>
</div>
<button className='text-white p-[10px] rounded-[50px] bg-black text-[14px] font-bold'>Follow</button>
  </div>
</div>
<button className='text-[#1DA1F2] pt-[10px]'>Show more</button>
</div>
    </div>

    </>
    
     
  )
}

export default Home