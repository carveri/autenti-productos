import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { Session } from '../Interfaces/Public/interHome';

const page = async() => {

  redirect('/dashboard')

  const session = await getServerSession(authOptions)

  // validacion
  if(!session){
    redirect('/api/auth/signin')
  }

  console.log(session);

  const userPintar:Session = session

  return (
    <div>
       <h1>{userPintar.user.name ?? 'No hay usuario'}</h1>
    </div>
  )
}

export default page