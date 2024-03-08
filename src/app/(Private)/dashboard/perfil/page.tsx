'use client'
import React from 'react'

import { useSession } from "next-auth/react";


const page =() => {

    const {data: session} = useSession()

  return (
    <div>
        <section>
            {session?.user?.name ?? 'as'}
            {session?.user?.email ?? 'as'}
            {session?.user?.id ?? 'as'}
           
        </section>
    </div>
  )
}

export default page