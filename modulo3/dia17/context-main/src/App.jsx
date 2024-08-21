import { useContext,useState, useEffect } from "react"
import { ThemeContext } from "./context/ThemeProvider"

export default function App() {
  const { theme } = useContext(ThemeContext);

  const [books, setBooks] = useState([]);

  async function getData() {
    Object.keys(AppMenu).map(function(key, index) {
      console.log("Titulo1-->"+key);
      let dato = AppMenu[key]
      if(dato !== null && dato.title){
        console.log("Titutlo2-->"+dato.title)
        return;
      }      
      if(dato !== null && dato.length>0){
        dato.map(obj => {
          console.log("Titulo 2 -->"+obj.title);
        })
        return;
      }
      
    });
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={`w-full h-screen bg-${theme}-secondary`}>
      <Appbar />

      <div className="flex h-[calc(100%-4rem)] w-full">
        <Sidebar />
        <main className="w-full h-full grid place-content-center">
          <Themes />
        </main>
      </div>

    </div>
  )
}




export const Sidebar = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="p-6  w-fit h-full">
      <aside className={`w-72 h-full bg-${theme}-primary rounded-md p-4 text-${theme}-text`}>

        <ul className="flex flex-col gap-4">          
          { 
            Object.keys(AppMenu).map((key, index) => {
              return (    
                <>         
                  <li key={index} className={`px-4 hover:bg-${theme}-secondary cursor-pointer`}>{key}</li>
                  <ul>
                    {(AppMenu[key] !== null && AppMenu[key].title) && 
                      <li>{AppMenu[key].title}</li>
                    }
                    {
                      (AppMenu[key] !== null && Array.isArray(AppMenu[key])) &&               
                      
                        AppMenu[key].map(obj => 
                          <li>{obj.title}</li>
                        )
                    }
                  </ul>
                </>
              )
            })
          }
        </ul>
      </aside>

    </div>

  )
}



export const Appbar = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <nav className={`flex justify-between px-6 h-16 items-center bg-${theme}-primary shadow-md text-${theme}-text`}>
      <figure>
        <img src="" alt="" />
      </figure>

      <ul className="flex gap-4 gont-bold">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </nav>
  )
}

export const Themes = () => {
  const { changeTheme, theme } = useContext(ThemeContext)
  return (
    <div className="p-6  w-fit h-full">
      <aside className={`w-72 h-full bg-${theme}-primary rounded-md p-4 text-${theme}-text`}>

        <ul className="flex flex-col gap-4">
          <li onClick={() => changeTheme('base')}>Base</li>
          <li onClick={() => changeTheme('dark')}>Dark</li>
          <li onClick={() => changeTheme('minimalist')}>Minimalist</li>
        </ul>

      </aside>

    </div>

  )
}


export const AppMenu = {
  Home: {
      title: "Dashboard",
      href: "/",
      icon: "pi pi-home",
      permission: "dashboard.view"
  },

  Operaciones: [
      {
          title: "Prestamos",
          icon: "pi pi-money-bill",
          content: [
              {
                  title: "Tabla de amortización",
                  href: "/loans/amortization",
                  icon: "pi pi-table",
                  permission: "default"
              }
              , {
                  title: "Nuevo Préstamo",
                  href: "/loans/new",
                  icon: "pi pi-plus-circle",
                  permission: "prestamos.create"
              },
              {
                  title: "Solicitudes",
                  href: "/loans",
                  icon: "pi pi-list",
                  permission: "prestamos.view"
              }
          ]
      },
      {
          title: "Cobros",
          icon: "pi pi-wallet",
          content: [
              {
                  title: "Nuevo Cobro",
                  href: "/collections/new",
                  icon: "pi pi-plus-circle",
                  permission: "cobros.create"
              },
              {
                  title: "Cobros",
                  href: "/collections",
                  icon: "pi pi-list",
                  permission: "cobros.view"
              }
          ]
      }
    

  ],

  Configuraciones: [
      {
          title: "Usuarios",
          icon: "pi pi-users",
          content: [
              {
                  title: "Usuarios",
                  href: "/users",
                  icon: "pi pi-users",
                  permission: "usuarios.view"
              },
              {
                  title: "Nuevo Usuarios",
                  href: "/users/new",
                  icon: "pi pi-user-plus",
                  permission: "usuarios.create"
              },
          ]
      },
      {
          title: "Roles",
          icon: "pi pi-lock",
          content: [
              {
                  title: "Roles",
                  href: "/roles",
                  icon: "pi pi-list",
                  permission: "roles.view"
              },
              {
                  title: "Nuevo Rol",
                  href: "/roles/new",
                  icon: "pi pi-plus-circle",
                  permission: "roles.create"
              }
          ]
      }

  ],
}