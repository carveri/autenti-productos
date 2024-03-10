'use client'

import { useSession } from "next-auth/react";

const PagePerfil =() => {

    const {data: session} = useSession()

  return (
    <div className='w-full h-full grid justify-items-center '>
        <section className='w-2/6 h-3/6 bg-red-800 mt-48 px-8'>
          <header className='h-16 text-2xl grid place-items-center'>
            Perfil del Usuario
          </header>
            <section className='grid grid-rows-3 text-xl'>
              <article>
                Username: {session?.user?.name ?? 'as'}
              </article>
              <article>
                Email: {session?.user?.email ?? 'as'}
              </article>
              <article>
                Id: {session?.user?.id ?? 'as'}
              </article>
            </section>
        </section>
    </div>
  )
}

export default PagePerfil