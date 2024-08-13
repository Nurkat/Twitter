import React from 'react'

function Button({title,type,isrequired,extraStyle,width, onClick}) {
  return (
  <button onClick={onClick}style={{width:`${width}px`}}    required={isrequired} type={type} className={`font-semibold w-full py-[18px] bg-[#1DA1F2] ${extraStyle ? extraStyle : "border-none "} text-white rounded-[76px] text-[18px]`}>{title}</button>
  )
}

export default Button