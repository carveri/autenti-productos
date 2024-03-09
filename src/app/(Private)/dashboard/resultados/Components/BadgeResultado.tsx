import React from 'react'

const BadgeResultado = ({nombreProducto, precio, userId}) => {
  return (
    <div className='w-full h-14 grid grid-cols-4 place-items-center border-2 border-gray-700 bg-gray-500'>
        <section>
            {nombreProducto}
        </section>
        <section>
            US${precio}
        </section>
        <section>
          <button>
            Informacion
          </button>
        </section>
        <section>
          <article>
            <button>
              Actualizar
            </button>
          </article>
          <article>
            <button>
              Borrar
            </button>
          </article>
        </section>
    </div>
  )
}

export default BadgeResultado