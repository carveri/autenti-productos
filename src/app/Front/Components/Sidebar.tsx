import { authOptions } from '@/app/api/auth/[...nextauth]/route'
//import { newAuth } from '@/app/api/auth/auth'
import { getServerSession } from 'next-auth/next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const Sidebar = async() => {


    const session = await getServerSession(authOptions)

    // validacion
    if(!session){
      redirect('/api/auth/signin')
    }
      
  return (
    <aside className='w-full h-full '>
        <header className='h-20 grid place-items-center bg-black border-x-4 border-gray-600'>
            Dashboard
        </header>
        <ul className='w-full h-full bg-sky-900 grid grid-rows-3 items-center '>
            <li className='cursor-pointer pr-11 py-4 hover:bg-gray-700 pl-4 '>
                <Link className='pr-56 py-4 ' href='/dashboard'>Home</Link>
            </li>
            <li className='cursor-pointer pr-11 py-4 hover:bg-gray-700  pl-4'>
                <Link className='pr-52 py-4 ' href='/dashboard/resultados'>Resultados</Link>
            </li>
            
            <li className='cursor-pointer pr-11 py-4 hover:bg-gray-700  pl-4'>
                <Link className='pr-56 py-4 ' href='/dashboard/perfil'>Perfil</Link>
            </li>
        </ul>
        <div className='h-24'>

        </div>
        <div className='mt-96 h-14 bg-green-500 grid content-center pl-4'>
            {session?.user?.name ?? 'Nada'}
        </div>
    </aside>
  )
}

export default Sidebar