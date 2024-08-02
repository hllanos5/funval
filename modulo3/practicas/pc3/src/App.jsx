import { useEffect, useState } from 'react'
import { Input } from './components/shared/Input';
import { Button } from './components/shared/Button';

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
    setTotals(emptyValues);
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
        <div className="data-wrapper">
          <h1>Bill</h1>
          <Input input={oInput1} valor={values.bill} handleInput={handleInput}/>
          <h2>Select Tip %</h2>
          <ul>
            <Button aButton={aBotones} valor= {values.tip} handleInput={handleInput}/>
            <li><input type="number" placeholder="Custom" id="custom-percentage-button" className="percentage-button"/></li>
          </ul>
          <h2>Number of People</h2>
          <Input input={oInput2} valor={values.people} handleInput={handleInput}/>
        </div>
        <div className="result-wrapper">
          <div className="result-txt">
            <div className="text-amount">
              <div>
                <h2>Tip Amount</h2>
                <p>/ person</p>
              </div>
              <h3>$<span id="tip-amount">{totals.totalTip}</span></h3>
            </div>
            <div className="total-amount">
              <div>
                <h2>Total</h2>
                <p>/ person</p>
              </div>
              <h3>$<span id="total">{totals.totalAmount}</span></h3>
            </div>
          </div><button type="button" id="reset-button" className="reset-button" onClick={reset}>RESET</button>
        </div>
      </div>
    </>
  )
}

export default App
