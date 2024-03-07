import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <aside className='w-full h-full '>
        <header className='h-20 grid place-items-center'>
            Dashboard
        </header>
        <ul className='w-full h-full bg-blue-100 grid grid-rows-3 items-center '>
            <li className='cursor-pointer pr-11 py-4 hover:bg-gray-700 pl-4'>
                <Link className='pr-56 py-4 ' href='/dashboard'>Home</Link>
            </li>
            <li className='cursor-pointer pr-11 py-4 hover:bg-gray-700  pl-4'>
                <Link className='pr-52 py-4 ' href='/dashboard/resultados'>Resultados</Link>
            </li>
            <li className='cursor-pointer pr-11 py-4 hover:bg-gray-700  pl-4'>
                <Link className='pr-56 py-4 ' href='/dashboard/planta'>Planta</Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar