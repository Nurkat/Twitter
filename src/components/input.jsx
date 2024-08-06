import React from 'react'

function Input({placeholder,type,name,extraClass}) {
  return (
<input className={`w-full focus:shadow-lg duration-300 outline-none py-[23px] pl-[20px] border-[1px] border-slate-500 text-[18px] rounded-[6px] text-slate-500 ${extraClass}`} name={name} type={type} placeholder={placeholder}/>
  )
}

export default Input