'use client'

import React from 'react'
import { useRouter } from "next/navigation";

const FormRegistro = () => {

    const navegar = useRouter()

    const handleSubmitRegistro = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        navegar.push('/dashboard')
    }

  return (
    <form onSubmit={handleSubmitRegistro} className='w-96 h-4/6 bg-blue-800 px-8'>
        <header className='h-1/6 grid place-content-center text-xl'>
            Form Registro
        </header>
        <main className='h-4/6 grid grid-rows-4'> 
            <section>
                <label className='grid grid-rows-2' htmlFor="">Username</label>
                <input className='w-full h-10 pl-4' type="text" placeholder='juanito...' />
            </section>
            <section>
                <label className='grid grid-rows-2' htmlFor="">Email</label>
                <input className='w-full h-10 pl-4' type="text" placeholder='juanito@gmail.com'/>
            </section>
            <section>
                <label className='grid grid-rows-2' htmlFor="">Password</label>
                <input className='w-full h-10 pl-4' type="text" placeholder='************'/>
            </section>
            <section>
                <label className='grid grid-rows-2' htmlFor="">ConfirmPassword</label>
                <input className='w-full h-10 pl-4' type="text" placeholder='************'/>
            </section>
        </main>
        <div className='h-1/6 grid place-items-center '>
            <button className='w-80 h-14 bg-green-500'>
                Enviar
            </button>
        </div>
    </form>
  )
}

export default FormRegistro