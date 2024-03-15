'use client'

import Link from 'next/link'
import {useState} from 'react'
import { signIn } from "next-auth/react";
import {useRouter} from "next/navigation";

const FormLogin = () => {

    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeLogin =(e)=>{
        if(e.target.name === 'email'){
            setEmail(e.target.value)
        }
        else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
        else{
            console.log('sdsd');
        }
    }

    const handleSubmitLogin = async(e)=>{
        e.preventDefault()
        const res = await signIn('credentials', {
            email: email,
            password: password,
            redirect: false
        })
        //console.log(res);
        if(res?.error){
            alert(res.error)
        }
        else{
            router.push('/dashboard')
        }
        
    }

  return (
    <form onSubmit={handleSubmitLogin}  className='w-96 h-4/6 bg-black px-6'>
        <header className='h-1/5 grid place-content-center text-xl'>
            Form Login
        </header>
        <main className='h-3/5 grid grid-rows-3'>
            <section className='grid grid-rows-2'>
                <label htmlFor="">Email</label>
                <input name='email' onChange={handleChangeLogin} className='pl-4' type="text" placeholder='juanito@gmail.com'/>
            </section>
            <section className='grid grid-rows-2'>
                <label htmlFor="">Password</label>
                <input name='password'  onChange={handleChangeLogin} className='pl-4' type="text" placeholder='*********'/>
            </section>
            <section className='grid grid-rows-2'>
                ¿No tienes una cuenta?. registrate aqui: <Link href={'/api/auth/registro'}>Registro</Link>
            </section>
        </main>
        <div className='h-1/5 grid place-items-center'>
            <button className='w-80 h-16 bg-blue-500'>
                Ingresar
            </button>
        </div>
    </form>
  )
}

export default FormLogin