'use client'

import React from 'react'
import { useRouter } from "next/navigation";
import { deleteData } from '@/app/Fetch/deleteData';

const BadgeResultado = ({nombreProducto, precio, userId, id}) => {

  
  
  const idProdu = id
  
  const handleClickBadgeResultados = (e)=>{
      const router = useRouter()
      if(e.target.name === 'informacion'){
        router.push(`/dashboard/resultados/${idProdu}`)
      }
      else if(e.target.name === 'actualizar'){
        console.log('soy el de actualizar, id del producto:', idProdu);
      }
      else if(e.target.name === 'borrar'){
        try {
          //const data = ''
          const ruta = 'producto'
          const idProducto = idProdu
          deleteData({ruta, idProducto})
          router.refresh()
        } catch (error) {
          console.log(error);
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
            <button name='actualizar' onClick={handleClickBadgeResultados} className='bg-blue-500 w-24 mb-1 hover:bg-blue-900'>
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