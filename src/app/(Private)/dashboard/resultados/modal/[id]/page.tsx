'use client'

import {useState} from 'react'
import { useRouter } from "next/navigation";

import { useSession } from "next-auth/react";
import { postOneData } from '@/app/Fetch/postOneData';

const ModalUpdateResultado = ({params}) => {

    //console.log('parametrosososs:', params);
    const {data: session} = useSession()
    
    

    const [nombreProducto, setNombreProducto] = useState('')
    const [precio, setPrecio] = useState(0)

    const handleChangeModalResultado = (e)=>{
        if(e.target.name === 'nombreProducto'){
            setNombreProducto(e.target.value)
        }
        else if(e.target.name === 'precio'){
            setPrecio(e.target.valueAsNumber)
        }
        else{
            console.log('d');
        }
    }

    const handleSubmitUpdateResultado = (e)=>{
        e.preventDefault()
        // console.log('nombreProducto:', nombreProducto);
        // console.log('precio', precio);
        // console.log('productId:', productId);
        const userId = session?.user?.id
        //console.log('userId:', userId);

        const ruta = 'producto'
        const data = {nombreProducto, precio, userId} 
        const id = params.id
        postOneData({ruta, data, id})
        
        
        
        
        
    }

  return (
    <form onSubmit={handleSubmitUpdateResultado} className='w-2/6 h-2/5 bg-red-700 fixed top-20 left-96 ml-80 px-8'>
        <header className='h-1/5 w-full grid place-content-center text-xl'>
            Actualizar Producto
        </header>
        <main className='h-3/5 w-full grid grid-rows-2'>
            <section className='grid'>
                <label htmlFor="">Nombre de Producto: </label>
                <input name='nombreProducto' onChange={handleChangeModalResultado} className='h-12 pl-4' type="text" placeholder='Tele...'/>
            </section>
            <section className='grid '>
                <label htmlFor="">Precio: </label>
                <input name='precio' onChange={handleChangeModalResultado} className='h-12 pl-4' type="number" placeholder='0'/>
            </section>
        </main>
        <section className='h-1/5 w-full grid justify-center'>
            <button className='w-60 h-16 bg-blue-600 hover:bg-blue-950'>
                Actualizar
            </button>
        </section>
    </form>
  )
}

export default ModalUpdateResultado