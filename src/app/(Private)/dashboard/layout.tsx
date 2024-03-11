import Navbar from "@/app/Front/Components/Navbar";
import Sidebar from "@/app/Front/Components/Sidebar";



export default function PrivateLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
    return (
      <div className="w-screen h-screen bg-black flex">
        <section className="w-1/6 h-full bg-gray-900">
            <header className="h-14 w-full grid place-content-center" >
                GASTOS
            </header>
            <main className="h-44 w-full bg-black">
                <Sidebar />
            </main>
        </section>
        <section className="w-5/6 h-full bg-gray-600">
            <nav className="flex justify-end bg-black space-x-96 border-2 border-gray-600">
                <div className="w-5/6 h-14 flex place-items-center pl-4">
                    <label htmlFor="">Buscar: </label>
                    <input className="w-full h-9 ml-2 pl-4 rounded bg-black border-2 border-green-500" type="text" placeholder='Computador...'/>
                </div>
                <Navbar />
            </nav>
            <main className="h-4/5 w-full">
                {children}
            </main>
        </section>
      </div>
    );
  }