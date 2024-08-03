import { useEffect, useState } from 'react'
import { PanelIzquierda } from './components/PanelIzquierda';
import { PanelDerecha } from './components/PanelDerecha';

const emptyValues = {
  tip:0,
  bill:0,
  people:0
}
const emptyTotal = {
  totalTip: 0,
  totalAmount:0
}

function App() {

  /* {I} - Logica para la calculadora*/
  const[values, setValues] = useState(emptyValues);
  const[totals, setTotals] = useState(emptyTotal);

  function handleInput(e){
    setValues({...values,[e.target.name]:e.target.value});
  }

  function reset() {
    setTotals(emptyTotal);
    setValues(emptyValues);
  }

  useEffect(()=>{
    const{bill, tip, people} = values;

    if(bill>0 && tip > 0 && people> 0){

      const totalTip = (parseFloat(bill) * (parseFloat(tip)/100 )) / parseInt(people);
      const totalAmount = (parseFloat(bill)/parseInt(people)) + totalTip;

      setTotals({totalTip, totalAmount});
    }
    
  },[values]);

  /* {F} - Logica para la calculadora*/
  
  /* {I} - Llenado de componentes*/ 
  let oInput1 = {identificador: "input-bill", name:"bill", clase:"input-bill", tipo:"number", value:"0", minimo:"0"};
  let oInput2 = {identificador: "input-people", name:"people", clase:"input-people", tipo:"number", value:"0", minimo:"1"};
  let oInput3 = {identificador: "custom-percentage-button", name:"tip", clase:"input-people", tipo:"number", value:"", minimo:"1"};
  
  let aBotones = [
    {porcentaje:5,  type:"button", name:"tip", clase: "percentage-button"},
    {porcentaje:10, type:"button", name:"tip", clase: "percentage-button"},
    {porcentaje:15, type:"button", name:"tip", clase: "percentage-button"},
    {porcentaje:25, type:"button", name:"tip", clase: "percentage-button"},
    {porcentaje:50, type:"button", name:"tip", clase: "percentage-button"},
  ]
  /* {F} - Llenado de componentes*/
  return (
    <>
     <header><img src="./images/logo.svg" alt=""/></header>
      <div className="general-wrapper">
      <PanelIzquierda oInput1={oInput1}  oInput2= {oInput2}  aBotones={aBotones} values={values} handleInput={handleInput}/>
      <PanelDerecha totals={totals} reset={reset}/>
      </div>
    </>
  )
}

export default App
