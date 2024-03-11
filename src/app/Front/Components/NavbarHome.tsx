import Link from 'next/link'
import React from 'react'


const NavbarHome = () => {
  return (
        <ul className='w-80 h-full grid grid-cols-3 bg-gray-600 place-items-center'>
            <li className=' hover:underline'>
                <Link href='/'>Preguntas</Link>
            </li>
            <li className='hover:underline'>
                <Link href='/'>Precios</Link>
            </li>
            <li className='hover:underline'>
                <Link href='/api/auth/signin'>Login</Link> 
            </li>
        </ul>
  )
}

export default NavbarHome