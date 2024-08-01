import { Titulo } from "./Titulo";
import { SubTitulo } from "./SubTitulo";

export function Cabecera() {
    const aTitulo = [
        {id:1,texto:"Reliable, efficient delivery", clase:"titulo-1"},
        {id:2, texto: "Powered by Technology", clase:"titulo-2"}
    ];

    const aSubTitulo = [
        {id:1,texto:"Our Artifical Intelligence powered tools use millions of project data", clase:"sub-titulo"},
        {id:2, texto: "points to ensure that your project is successful", clase:"sub-titulo"}
    ];

    return (
        <div className='cabecera'>
            { 
                aTitulo.map((obj,i) => 
                    <Titulo key={obj.id} clase={obj.clase} texto={obj.texto}/>                    
                )
            }
            { 
                aSubTitulo.map((obj,i) => 
                    <SubTitulo key={obj.id} clase={obj.clase} texto={obj.texto}/>                    
                )
            }
        </div>
    )
}
