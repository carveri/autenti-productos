'use client'

import { useSession } from "next-auth/react";

const PagePerfil =() => {

    const {data: session} = useSession()

  return (
    <div className='w-full h-full grid justify-items-center '>
        <section className='w-2/6 h-3/6 bg-black mt-48 px-8'>
          <header className='h-20 text-2xl grid place-items-center'>
            Perfil del Usuario
          </header>
            <section className='grid grid-rows-3 text-xl '>
              <article className="h-20 border-4 border-gray-600 mb-2 grid content-center pl-4">
                Username: {session?.user?.name ?? 'as'}
              </article>
              <article className="h-20 border-4 border-gray-600 mb-2 grid content-center pl-4">
                Email: {session?.user?.email ?? 'as'}
              </article>
              <article className="h-20 border-4 border-gray-600 mb-2 grid content-center pl-4">
                Id: {session?.user?.id ?? 'as'}
              </article>
            </section>
        </section>
    </div>
  )
}

export default PagePerfil