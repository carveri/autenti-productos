import React from 'react'
import FormLogin from './Components/FormLogin'
import { getServerSession } from 'next-auth'
import { authOptions } from '../[...nextauth]/route'
import { redirect } from 'next/navigation'

const page = async() => {

  // const session = await getServerSession(authOptions)

  // // validacion
  // if(!session){
  //   redirect('/api/auth/signin')
  // }

  // console.log(session.user);


  return (
    <div className='w-screen h-screen grid place-items-center'>
        <FormLogin />
    </div>
  )
}

export default page