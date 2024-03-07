import Link from 'next/link'
import React from 'react'

const FormLogin = () => {
  return (
    <form  className='w-96 h-4/6 bg-blue-800 px-6'>
        <header className='h-1/5 grid place-content-center text-xl'>
            Form Login
        </header>
        <main className='h-3/5 grid grid-rows-3'>
            <section className='grid grid-rows-2'>
                <label htmlFor="">Username</label>
                <input className='pl-4' type="text" placeholder='juanito...'/>
            </section>
            <section className='grid grid-rows-2'>
                <label htmlFor="">Email</label>
                <input className='pl-4' type="text" placeholder='juanito...'/>
            </section>
            <section className='grid grid-rows-2'>
                ¿No tienes una cuenta?. registrate aqui: <Link href={'/api/auth/registro'}>Registro</Link>
            </section>
        </main>
        <div className='h-1/5 grid place-items-center'>
            <button className='w-80 h-16 bg-green-500'>
                Ingresar
            </button>
        </div>
    </form>
  )
}

export default FormLogin