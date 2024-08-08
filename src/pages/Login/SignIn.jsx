import React, { useContext } from 'react'
import {TwitterIcon} from '../../assets/images/icons'
import { Link } from 'react-router-dom'
import  Input  from '../../components/input'
import Button from '../../components/button'
import { Context } from '../../context/Context'


 
function SignIn() {
  const {setToken} =useContext(Context)
  const handleSubitLogin = (e)=>{
    e.preventDefault()
    const data = {
      login:e.target.login.value.trim(),
      password:e.target.password.value.trim()
    }
    if (data.login =="nurkat" && data.password =="123"){
      setToken(data)
      e.target.reset()
    }
    else{
alert("Error")
} 

  }

  return (
   <form onSubmit ={handleSubitLogin} autoComplete='off' className='w-[450px] mx-auto mt-[60px] '>
  <Link className='mb-[36px] inline-block' to={'/'}><TwitterIcon/></Link>
  <h1 className='text-[42px] font-bold leading-[49.22px] mb-[36px]'>Log in to Twitter</h1>
  <Input isrequired={true} placeholder={'Phone number, email address'} type={'text'} name={'login'} extraClass={'mb-[25px]'}/>
  <Input isrequired={true} placeholder={'Password'} type={'password'} name={'password'} extraClass={'mb-[25px]'}/>
  <Button title={'Log In'} type={'submit'}/>
  <div className='flex items-center justify-between mt-[40px]'>
    <Link className='text-[18px] font-regular leading-[23.94px] text-[#1DA1F2]' to={'/sign-up'}>Forgot password?</Link>
    <Link className='text-[18px] font-regular leading-[23.94px] text-[#1DA1F2]' to={'/sign-up'}>Sign up to Twitter</Link>
  </div>
   </form>
  )
}

export default SignIn