import React from 'react'
import BadgeResultado from './Components/BadgeResultado'
import { dataResultados } from '@/app/Front/Utils/dataResultados'

const page = () => {
  return (
   <section className='w-full h-full bg-red-500 '>
      <header className='h-1/6  bg-green-500 grid place-content-center text-2xl'>
        Resultados
      </header>
      <div className=' bg-blue-700 h-auto grid grid-cols-3 place-content-center gap-y-3 '>
        {dataResultados.map((element)=>{
          const {nombreProducto, precio, userId} = element
          return <div key={userId} className=' '>
            <BadgeResultado
            nombreProducto = {nombreProducto}
            precio = {precio}
            userId = {userId}
          />
          </div>
        })}
        
      </div>
   </section>
  )
}

export default page