import React from 'react'

const Formulario = () => {
  return (
    <form className='w-full h-full px-8'>
        <header className='h-1/5 text-2xl grid place-content-center'>
            Formulario
        </header>
        <main className='h-3/6 grid grid-rows-2'>
            <div className='grid'>
                <label className=' grid content-center ' htmlFor="">Producto</label>
                <input className='h-14 pl-4' type="text" />
            </div>
            <div className='grid'>
                <label className=' grid content-center ' htmlFor="">Precio</label>
                <input className='h-14 pl-4' type="text" />
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