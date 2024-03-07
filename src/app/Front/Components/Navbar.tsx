import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
        <ul className='w-80 h-14 bg-red-900 grid grid-cols-3 place-items-center'>
           
            <li>
                <Link href='/'>Cosas</Link>
            </li>
            <li>
                <Link href='/'>Mi Cuenta</Link>
            </li>
            <li >
                <Link className=' hover:underline' href='/'>Salir</Link>
            </li>
        </ul>
  )
}

export default Navbar