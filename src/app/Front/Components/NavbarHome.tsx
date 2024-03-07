'use client'

import Link from 'next/link'
import React from 'react'

import { signIn } from "next-auth/react";

const NavbarHome = () => {

    const handleClickLogin = ()=>{
        signIn()
    }

  return (
        <ul className='w-80  bg-red-900 grid grid-cols-3 place-items-center'>
            <li>
                <Link href='/'>Preguntas</Link>
            </li>
            <li>
                <Link href='/'>Precios</Link>
            </li>
            <button onClick={handleClickLogin}>
                login
            </button>
        </ul>
  )
}

export default NavbarHome