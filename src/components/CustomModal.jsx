
import React from "react"

function CustomModal({isOpenModal,setIsOpenModal,children}){
    function handeleCloseClick(e){
        if(e.target.id == "wrapper") setIsOpenModal(false)

    }
    return(
        <div onClick={handeleCloseClick} className={`fixed top-0 z-50 bottom-0 right-0 left-0 duration-300 backdrop-blur-[5px] ${isOpenModal ? "scale-slate-500" : "scale-0" }`}>
           <div className='absolute w-[600px] h-[300px] bg-slate-400 left-0 shadow-lg top-0 right-0 bottom-0 m-auto rounded-lg'>{children}</div> 
        </div>
    )
}
export default  CustomModal