import { getOneData } from '@/app/Fetch/getOneData'
import { ParamsFinal } from '@/app/Interfaces/Private/interResultados'
import Link from 'next/link'
import React from 'react'

const page = async({params}:ParamsFinal) => {

    const idProducto = params.id
    //console.log('iddeperams:', idProducto);
    const res = await getOneData({idProducto})

    const {nombreProducto, precio, id, userId} = res

    //console.log('parametros', params);
    

  return (
    <div className='w-full h-full grid place-items-center'>
        <div className='w-2/5 h-3/5 bg-gray-900 px-6'>
            <header className='w-full h-1/6 text-2xl grid place-content-center'>
                Producto Unico
            </header>
            <main className='w-full h-3/5 grid grid-rows-4 mb-4 '>
                <section className=' grid items-center'>
                    <label htmlFor="">Nombre Producto:</label>
                    <article className='text-green-700 text-xl'>
                        {nombreProducto}
                    </article>
                </section>
                <section className='grid items-center'>
                    <label htmlFor="">Precio del Producto:</label>
                    <article className='text-green-700 text-xl'>
                        US${precio}
                    </article>
                </section>
                <section className='grid items-center'>
                    <label htmlFor="">Id del Producto: </label>
                    <article className='text-green-700 text-xl'>
                        {id}
                    </article>
                </section>
                <section className='grid items-center'>
                    <label htmlFor="">Le pertenece a: </label>
                    <article className='text-green-700 text-xl'>
                        {userId}
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