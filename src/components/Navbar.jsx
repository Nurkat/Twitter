import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import {HomeIcon,TwitterIcon,ExploreIcon,NotificationsIcon,MessagesIcon,BookmarksIcon,ListsIcon,ProfileIcon,MoreIcon, MoreBtn}  from '../assets/images/icons'
import NavbarItem from './NavbarItem'
import Button from '../components/button'
import Avatar from '../assets/images/Avatar.svg'
import CustomModal from './CustomModal'





function Navbar() {
    const userData = JSON.parse(window.localStorage.getItem("token"))
    const [OpenModal,setOpenModal] =useState(false)
    const navbarList = [
        {
            id:1,
            title:"Home",
            path:"/",
            icon:<HomeIcon/>,
        },
        {
            id:2,
            title:"Explore",
            path:"/explore",
            icon:<ExploreIcon/>,
        },
        {
            id:3,
            title:"Notifications",
            path:"/notifications",
            icon:<NotificationsIcon/>,
        },
        {
            id:4,
            title:"Messages",
            path:"/messages",
            icon:<MessagesIcon/>,
        },
        {
            id:5,
            title:"Bookmarks",
            path:"/bookmarks",
            icon:<BookmarksIcon/>,
        },
        {
            id:6,
            title:"Lists",
            path:"/lists",
            icon:<ListsIcon/>,
        },
        {
            id:7,
            title:"Profile",
            path:"/profile",
            icon:<ProfileIcon/>,
        },
        {
            id:8,
            title:"More",
            path:"/more",
            icon:<MoreIcon/>,
        },
    ]
    function SignOut (){
        localStorage.clear()
        location.pathname = "/"
        location.reload()
    }
   
  return (
    <div className='w-[20%] pt-[31px] pr-[53px] border-r-[1px] overflow-y-auto  border-slate-500 h-[100vh] '>
        <Link to={'/'}>
        <TwitterIcon/>
        </Link>
        <ul className='mt-[49px] space-y-[30px] mb-[30px]'>
          {navbarList.map((item, index) =>  <NavbarItem key={item.id} item={item}/>)}
        </ul>
      <Button title={"Tweet"} type={'button'}/>
      <div className='mt-[260px] flex space-x-[10px] items-center justify-between '>
        <div className='flex space-x-[10px]' >
<img src={Avatar} alt="Avatar-img" width={50} height={50} />
<div className='flex  flex-col items-center space-y-[2px]'>
    <strong className='capitalize'>{userData.login}</strong>
   <a href="mailto:@nurkat">@{userData.login}</a>
</div>
        </div>
<button onClick={() => setOpenModal(true)}><MoreBtn/></button>
      </div>
      <CustomModal isOpenModal={OpenModal} setIsOpenModal={setOpenModal}>
        <h2 className='font-bold text-center text-[35px] mb-[30px] '>Do you want log out</h2>
      <div className='flex items-center justify-center space-x-5 px-[20px] '>
        <Button onClick={()=> setOpenModal(false)} width={200}  title={"No"} extraStyle={"bg-red-600" } />
        <Button onClick={SignOut}  width={200} title={"Yes"} extraStyle={"bg-green-600"}/>

      </div>
      </CustomModal>
    </div>
  )
}

export default Navbar