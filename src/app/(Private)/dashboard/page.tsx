import { getServerSession } from "next-auth"
import Formulario from "../Components/Formulario"
import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import { redirect } from "next/navigation"

const page = async() => {

  const session = await getServerSession(authOptions)

  // validacion
  if(!session){
    redirect('/api/auth/signin')
  }

  return (
    <div className="w-full h-full grid place-items-center">
      <section className="w-96 h-4/5 bg-red-700">
        <Formulario />
      </section>
    </div>
  )
}

export default page 