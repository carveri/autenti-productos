'use client'

import {useState, useEffect} from 'react'
import BadgeResultado from './Components/BadgeResultado'
import { getData } from '@/app/Fetch/getData'

const page =() => {

  const [producto, setProducto] = useState([])

  useEffect(()=>{
    const res = async()=>{
      const ruta = 'producto'
      const datos = await getData({ruta})
      setProducto(datos)
    }
    res()
  }, [])
  

  return (
   <section className='w-full h-full bg-gray-800 '>
      <header className='h-20  bg-green-500 grid place-content-center text-2xl'>
        Resultados
      </header>
      <div className='   '>
        {producto.length === 0 ?
          <div>
            No hay productos...
          </div>
          :
          <div className='h-auto grid grid-cols-3 place-content-center gap-4 px-8 pt-6'>
            {producto.map((element)=>{
            const {nombreProducto, precio, id} = element
            return <div key={id} className=' '>
              <BadgeResultado
              nombreProducto = {nombreProducto}
              precio = {precio}
              id={id}
            />
            </div>
          })}
          </div>
        }
        
        
      </div>
   </section>
  )
}

export default page