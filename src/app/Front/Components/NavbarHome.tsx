import Link from 'next/link'
import React from 'react'


const NavbarHome = () => {
  return (
        <ul className='w-80 h-full grid grid-cols-3 bg-gray-600 place-items-center'>
            <li className=' hover:underline'>
                <Link href='/preguntas'>Preguntas</Link>
            </li>
            <li className='hover:underline'>
                <Link href='/precio'>Precios</Link>
            </li>
            <li className='hover:underline'>
                <Link href='/api/auth/login'>Login</Link> 
            </li>
        </ul>
  )
}

export default NavbarHome