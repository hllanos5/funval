import { Quiz } from './components/quiz/Quiz' 
import { Welcome } from './components/welcome/Welcome' 

function App() {

  let datos = [
    {imagen:"./images/html.png",texto:"HTML",id:1},
    {imagen:"./images/css.png",texto:"CSS", id:2},
    {imagen:"./images/script-java.png",texto:"JAVA SCRIPT",id:3},
    {imagen:"./images/accesibilidad.png",texto:"ACCESIBILITY", id:4},
  ]

    return (
    <>
    <div className='main'>
      <div className='lado-izquierdo'></div>
      <div className='lado-medio'><Welcome/></div>
      <div className='lado-derecho'><Quiz datos={datos}/></div>
    </div>
    </>
  )
}

export default App
