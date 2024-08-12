import { Titulo1 } from "./Titulo1"
import { Contacto } from "./Contacto";
import { Button } from "./Button";

export function Contenido({toggleModal, aContacto}) {
    let titulo = "Lista de contactos";
    
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
            <Button dato={oButton} toggleModal={toggleModal}/>
        </div>
    )
}
