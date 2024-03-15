'use client'

import {useState} from 'react'
import { useRouter } from "next/navigation";
import { postData } from '@/app/Fetch/postData';
import bcrypt from "bcryptjs";

const FormRegistro = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navegar = useRouter()

    const handleChangeRegistro =(e)=>{
        if(e.target.name === 'username'){
            setName(e.target.value)
        }
        else if(e.target.name === 'email'){
            setEmail(e.target.value)
        }
        else if(e.target.name === 'password'){
            setPassword1(e.target.value)
        }
        else if(e.target.name === 'confirmPassword'){
            setConfirmPassword(e.target.value)
        }
        else{
            console.log('sds');
            
        }
    }

    const handleSubmitRegistro = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(name === '' || email === '' || password1 ==='' || confirmPassword === ''){
            return alert('Tienes que agregar todos los campos!')
        }
        if(password1 !== confirmPassword){
            return alert('Las contraseñas tienes que ser identicas')
        }
        //console.log(name, email, password1, confirmPassword);
        const ruta = 'registro'
        const password = bcrypt.hashSync(password1)
        const data = {name, email, password}
        postData({ruta, data})
        
        navegar.push('/api/auth/login')
    }

  return (
    <form onSubmit={handleSubmitRegistro} className='w-96 h-4/6 bg-black px-8'>
        <header className='h-1/6 grid place-content-center text-xl'>
            Form Registro
        </header>
        <main className='h-4/6 grid grid-rows-4'> 
            <section>
                <label className='grid grid-rows-2' htmlFor="">Username</label>
                <input name='username' onChange={handleChangeRegistro} className='w-full h-10 pl-4' type="text" placeholder='juanito...' />
            </section>
            <section>
                <label className='grid grid-rows-2' htmlFor="">Email</label>
                <input name='email' onChange={handleChangeRegistro} className='w-full h-10 pl-4' type="email" placeholder='juanito@gmail.com'/>
            </section>
            <section>
                <label className='grid grid-rows-2' htmlFor="">Password</label>
                <input name='password' onChange={handleChangeRegistro} className='w-full h-10 pl-4' type="password" placeholder='************'/>
            </section>
            <section>
                <label className='grid grid-rows-2' htmlFor="">ConfirmPassword</label>
                <input name='confirmPassword' onChange={handleChangeRegistro} className='w-full h-10 pl-4' type="password" placeholder='************'/>
            </section>
        </main>
        <div className='h-1/6 grid place-items-center '>
            <button className='w-80 h-14 bg-blue-500'>
                Enviar
            </button>
        </div>
    </form>
  )
}

export default FormRegistro