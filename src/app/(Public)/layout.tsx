import NavbarHome from "../Front/Components/NavbarHome";

export default function PublicLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
    return (
      <div className="w-full h-full">
        <header className="w-full h-14 bg-gray-900 grid justify-items-center">
          <div className="w-4/5 h-full bg-gray-900 grid justify-end">
            <NavbarHome />
          </div>
        </header>
        <main className="w-full h-full grid justify-items-center">
          <div className="w-4/5 h-4/5 bg-red-400 ">
            {children}
          </div>
        </main>

      </div>
    );
  }