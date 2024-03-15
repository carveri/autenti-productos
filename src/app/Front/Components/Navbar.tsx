'use client'

import Link from 'next/link'
import React from 'react'


import { signOut } from "next-auth/react";

const Navbar = () => {

    const handleClickLogOut = ()=>{
        signOut()
        
    }

  return (
        <ul className='w-80 h-14 bg-black grid grid-cols-3 place-items-center '>
           
            <li>
                <Link href='/dashboard/cosas'>Cosas</Link>
            </li>
            <li>
                <Link href='/dashboard/miCuenta'>Mi Cuenta</Link>
            </li>
            <button onClick={handleClickLogOut}>
                Salir
            </button>
        </ul>
  )
}

export default Navbar