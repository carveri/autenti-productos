import NavbarHome from "../Front/Components/NavbarHome";

export default function PublicLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
    return (
      <div className="w-screen h-screen bg-gray-800 grid justify-items-center">
        <header className="w-3/5 h-14 bg-red-900 grid justify-end">
          <NavbarHome />
        </header>
        <main className="w-3/5 h-14  bg-green-700">
          {children}
        </main>

      </div>
    );
  }