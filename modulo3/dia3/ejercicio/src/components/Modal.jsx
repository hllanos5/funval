import { InputModal } from "./InputModal";
import { Titulo2 } from "./Titulo2"

export function Modal() {
    
    let titulo = "Agregar Contacto";
    let aInput = [
        {id:1,texto:"Nombre:", idElemento:"name", nombre: "name"},
        {id:2,texto:"Correo:", idElemento:"email", nombre: "email"},
        {id:3,texto:"Telefono:", idElemento:"phone", nombre: "phone"}
    ]

    return (
        <div id="modal" className="modal">
            <div className="modal-content">
                <span className="close">&times;</span>
                <Titulo2 texto={titulo}/>
                <form id="contactForm">
                {
                    aInput.map(obj => 
                        <InputModal key={obj.id} dato={obj}/>
                    )
                }
                </form>
            </div>
        </div>
  )
}
