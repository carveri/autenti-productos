'use client'

import React from 'react'
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import { deleteData } from '@/app/Fetch/deleteData';

const BadgeResultado = ({nombreProducto, precio, userId}) => {

  const {data: session} = useSession()

  console.log("session:=>", session);
  

  const router = useRouter()
  

  const handleClickBadgeResultados = (e)=>{
      if(e.target.name === 'informacion'){
        router.push(`/dashboard/resultados/343443`)
      }
      else if(e.target.name === 'actualizar'){
        console.log('soy el de actualizar');
      }
      else if(e.target.name === 'borrar'){
        try {
          //const data = ''
          const ruta = 'producto'
          const idProducto = '3e0cae6c-b378-4709-9221-51d4da98c08f'
          deleteData({ruta, idProducto})
        } catch (error) {
          console.log(error);
        }
        finally{
          router.refresh()
        }
        
      }
      else{
        console.log('mammaa');
        
      }
  }

  return (
    <div className='w-full h-16 grid grid-cols-4 place-items-center border-2 border-gray-700 bg-gray-500'>
        <section>
            {nombreProducto}
        </section>
        <section>
            US${precio}
        </section>
        <section>
          <button name='informacion' onClick={handleClickBadgeResultados} className='bg-green-500 h-8 px-1 hover:bg-green-800'>
            Informacion
          </button>
        </section>
        <section className=''>
          <article>
            <button name='actualizar' onClick={()=>console.log((id))} className='bg-blue-500 w-24 mb-1 hover:bg-blue-900'>
              Actualizar
            </button>
          </article>
          <article>
            <button name='borrar' onClick={handleClickBadgeResultados} className='bg-red-500 w-24 hover:bg-red-700'>
              Borrar
            </button>
          </article>
        </section>
    </div>
  )
}

export default BadgeResultado