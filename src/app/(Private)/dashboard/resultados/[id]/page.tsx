import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full grid place-items-center'>
        <div className='w-1/5 h-3/5 bg-gray-900 px-6'>
            <header className='w-full h-1/6 text-2xl grid place-content-center'>
                Producto Unico
            </header>
            <main className='w-full h-3/5 grid grid-rows-4 mb-4 '>
                <section className=' grid items-center'>
                    <label htmlFor="">Nombre Producto:</label>
                    <article className='text-green-700 text-xl'>
                        Television
                    </article>
                </section>
                <section className='grid items-center'>
                    <label htmlFor="">Precio del Producto:</label>
                    <article className='text-green-700 text-xl'>
                        US$40
                    </article>
                </section>
                <section className='grid items-center'>
                    <label htmlFor="">Id del Producto: </label>
                    <article className='text-green-700 text-xl'>
                        3t7374u3b4343434232323
                    </article>
                </section>
                <section className='grid items-center'>
                    <label htmlFor="">Le pertenece a: </label>
                    <article className='text-green-700 text-xl'>
                        juan
                    </article>
                </section>
            </main>
            <div className='h-1/5 w-76'>
                <div className='bg-red-500 w-full h-4/5 cursor-pointer grid place-content-center'>
                    <Link className=' px-28 py-6' href='/dashboard/resultados'>Volver</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page