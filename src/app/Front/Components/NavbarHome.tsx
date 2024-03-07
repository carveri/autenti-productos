import Link from 'next/link'
import React from 'react'

const NavbarHome = () => {
  return (
        <ul className='w-80  bg-red-900 grid grid-cols-3 place-items-center'>
            <li>
                <Link href='/'>Preguntas</Link>
            </li>
            <li>
                <Link href='/'>Precios</Link>
            </li>
            <li>
                <Link className='hover:underline' href='/dashboard'>Login</Link>
            </li>
        </ul>
  )
}

export default NavbarHome