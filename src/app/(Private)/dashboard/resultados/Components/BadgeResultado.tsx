import React from 'react'

const BadgeResultado = ({nombreProducto, precio, userId}) => {
  return (
    <div className='w-96 h-14 grid grid-cols-2 place-items-center border-2 border-gray-700'>
        <section>
            {nombreProducto}
        </section>
        <section>
            US${precio}
        </section>
    </div>
  )
}

export default BadgeResultado