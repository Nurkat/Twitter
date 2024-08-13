import React from 'react'
import { CommentIcon, LeftIcon} from '../../assets/images/icons'
import ProfileImg from '../../assets/images/profileImg.svg'
import Avatar from '../../assets/images/Avatar.svg'
import Button from '../../components/button'
import LocationImg from '../../assets/images/locationImg.svg'
import LinkImg from '../../assets/images/linkImg.svg'
import BornImg from '../../assets/images/bornImg.svg'
import DateImg from '../../assets/images/dateImg.svg'
import { Link, Outlet } from 'react-router-dom'
import Images from '../../assets/images/images.png'

function Profile() {
  return (
    <>
    <div className='w-[80%] flex justify-between'>
    <div className='w-[70%] border-r-[1px] border-slate-500 h-[100vh] overflow-y-auto'>
      <div className='sticky z-40 top-0 bg-white p-[20px] border-b-[1px] border-slate-500 flex justify-between items-center'>
        <div className='flex items-center space-x-[25px]'>
       <LeftIcon/>
        <h2 className='text-[24px] leading-[31px] font-bold'>Bobur</h2>
        </div>
      </div>
      <div className='h-[280]'>
        <img src={ProfileImg} alt="ProfileImg" width={910} height={280} />
        <div className='flex items-end justify-between px-[25px] -translate-y-[80px]'>
          <img src={Avatar} alt="AvatarImg" width={150} height={150} tra />
          <Button title={"Edit profile"} width={120}  extraStyle={"py-[10px] bg-transparent text-black border-[2px] borer-slate-500"}/>
        </div>
        <div className='pt-[10px] pl-[25px]'>
        <h2>Bobur</h2>
        <p>@bobur_mavlonov</p>
        <span>UX&UI designer at @abutechuz</span>
        </div>
        <ul className='flex space-x-[2px]'>
          <li className='flex items-center space-x-[2px]'>
            <img src={LocationImg} alt="LocationImg " width={24} height={24} />
            <span>Mashag’daman</span>
          </li>
          <li className='flex items-center space-x-[2px]'>
            <img src={LinkImg} alt="LocationImg " width={24} height={24} />
            <span className='text-[blue]'>t.me/boburjon_mavlonov</span>
          </li>
          <li className='flex items-center space-x-[2px]'>
            <img src={BornImg} alt="LocationImg " width={24} height={24} />
            <span>Born November 24, 2000</span>
          </li>
          <li className='flex items-center space-x-[2px]'>
            <img src={DateImg} alt="LocationImg " width={24} height={24} />
            <span>Joined May 2020</span>
          </li>
        </ul>
      </div>
      <ul className='flex items-center space-x-[100px] px-[50px] pt-[40px]'>
        <li>
          <Link className='text-[18px] font-bold' to={''}>Tweets</Link>
        </li>
        <li>
          <Link className='text-[18px] font-bold' to={''}>Tweets & replies</Link>
        </li>
        <li>
          <Link className='text-[18px] font-bold' to={''}>Media</Link>
        </li>
        <li>
          <Link className='text-[18px] font-bold' to={''}>Likes</Link>
        </li>
      </ul>
      <Outlet/>
      <div className='mt-[41px] px-[25px]'>
    <div className=' flex space-x-[15px]'>
<img src={Avatar} alt="Avataromg" width={60} height={60} />
<div >
  <div className='flex items-center space-x-[5px]'>
  <h1>Bobur</h1>
  <p>@bobur_mavlonov · Apr 1</p>
  </div>
     <span>4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim</span>
</div>
    
    </div>
      

      </div>
    </div>
    <div className='w-[30%] m-[20px] relative'>
  <input className='w-full mb-[11px] py-[15px] px-[30px] rounded-[31px] bg-[#EFF3F4] border-none overflow-none '   required type="search" placeholder='Search Twitter'   />
 <img src={Images} alt="Images" width={378} height={178} />
 <h1 className='pl-[17px] font-bold text-[24px] mb-[20px]'>Trends for you</h1>
  <p className='text-[#393B41] text-[16px] pl-[17px] mb-[3px]  font-regular'>Trending in Germany</p>
  <h2 className='text-[20px]  pl-[17px] font-semibold mb-[3px]  '>Revolution</h2>
  <span className='text-[#393B41] text-[16px]  pl-[17px] font-regular'>50.4K Tweets</span>
    </div>
  </div>
    </>
  )
}

export default Profile