import { Titulo1 } from "./Titulo1"
import { Contacto } from "./Contacto";
import { Button } from "./Button";

export function Contenido() {
    let titulo = "Lista de contactos";
    let aContacto= [
        {id:1,nombre:"Juan Perez", correo: "juan@example.com", numero:"123-456-7890", clasePadre:"contact", claseNombre:"name", claseDetalle: "details"},
        {id:2,nombre:"María García", correo: "maria@example.com", numero:"987-654-3210", clasePadre:"contact", claseNombre:"name", claseDetalle: "details"}
    ]
    let oButton = {id:"addContactBtn", contenido:"+"}

    return (
        <div className="container">
            <Titulo1 texto={titulo}/>
            <ul className="contact-list">
            {
                aContacto.map(obj => 
                    <Contacto key={obj.id} dato={obj}/>
                )
            }
            </ul>
            <Button dato={oButton}/>
        </div>
    )
}
