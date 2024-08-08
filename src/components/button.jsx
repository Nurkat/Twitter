import React from 'react'

function Button({title,type,isrequired,extraStyle}) {
  return (
  <button required={isrequired} type={type} className={`font-semibold w-full py-[18px] border-none bg-[#1DA1F2] ${extraStyle} text-white rounded-[76px] text-[18px]`}>{title}</button>
  )
}

export default Button