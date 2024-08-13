 import {createContext, useState } from "react";
 import Designsta  from '../assets/images/designsta.svg'
import Cloutexhibition from '../assets/images/cloutexhibition.svg'
import CreativePhoto from '../assets/images/creativePhoto.svg'
import Kebab from '../assets/images/kebab.png'


 const Context = createContext()
  
 const TokenContext =({children}) =>{
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")) || false)
    const [postList,setPostList]=useState(JSON.parse(localStorage.getItem("postList")) ||[
        {
          id:0,
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
          id:1,
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
          id:2,
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
    window.localStorage.setItem("token", JSON.stringify(token))
    window.localStorage.setItem("postList", JSON.stringify(postList))
    return(

        <Context.Provider value={{token,setToken,postList,setPostList}}>{children}</Context.Provider>
    )
 }
 export {TokenContext,Context}