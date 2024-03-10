'use client'

import { postData } from '@/app/Fetch/postData'
import {useState} from 'react'
import { useSession } from "next-auth/react";


const Formulario = () => {

    const {data: session} = useSession()

    const [nombreProducto, setNombreProducto] = useState('')
    const [precio, setPrecio] = useState(0)

    const handleChangeProducto = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name === 'producto'){
            setNombreProducto(e.target.value)
        }else if(e.target.name === 'precio'){
            setPrecio(e.target.valueAsNumber)
        }
        else{
            console.log('sdsd');
        }
    }

    const handleSubmitProducto = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        try {
            const ruta = 'producto'
            const userId = session?.user?.id
            const data = {nombreProducto, precio, userId}

            postData({ruta, data})
            alert('Producto guardado correctamente!')
        } catch (error) {
            console.log(error);
        }
        finally{
            setNombreProducto('')
            setPrecio(0)
        }

        
        
    }


  return (
    <form onSubmit={handleSubmitProducto} className='w-full h-full px-8'>
        <header className='h-1/5 text-2xl grid place-content-center'>
            Formulario
        </header>
        <main className='h-3/6 grid grid-rows-2'>
            <div className='grid'>
                <label className=' grid content-center ' htmlFor="">Producto</label>
                <input value={nombreProducto} onChange={handleChangeProducto} name='producto' className='h-14 pl-4' type="text" />
            </div>
            <div className='grid'>
                <label className=' grid content-center ' htmlFor="">Precio</label>
                <input value={precio} onChange={handleChangeProducto} name='precio' className='h-14 pl-4' type="number" />
            </div>
        </main>
        <div className='grid place-items-center mt-4'>
            <button className='bg-blue-500 w-60 h-20 hover:bg-blue-800 border-none'>
                Enviar
            </button>
        </div>
    </form>
  )
}

export default Formulario