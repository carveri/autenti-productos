import { getServerSession } from "next-auth"
import Formulario from "../Components/Formulario"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
//import { newAuth } from "@/app/api/auth/auth"

const page = async() => {

  const session = await getServerSession(authOptions)

  // validacion
  if(!session){
    redirect('/api/auth/login')
  }

  return (
    <div className="w-full h-full grid place-items-center">
      <section className="w-96 h-4/5 bg-black">
        <Formulario />
      </section>
    </div>
  )
}

export default page 