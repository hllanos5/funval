import { useEffect, useState } from 'react'
import { InputComponent } from './components/shared/InputComponent';

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

  let oInput = {identificador: "input-bill", clase:"input-bill", tipo:"number",  minimo:"0"};

  return (
    <>
     <header><img src="./images/logo.svg" alt=""/></header>
      <div className="general-wrapper">
        <div className="data-wrapper">
          <h1>Bill</h1>
          <label htmlFor="input-bill">
              <input className="input-bill" name="bill" id="input-bill" type="number" value={values.bill} min="0" onChange={handleInput}/>
          </label>
          <h2>Select Tip %</h2>
          <ul>
            <li id="percentage-5"><button type="button"  onClick={handleInput} name="tip" className={`percentage-button ${values.tip === "5" && 'active'}`} value="5">5%</button></li>
            <li id="percentage-10"><button type="button" onClick={handleInput} name="tip" className={`percentage-button ${values.tip === "10" && 'active'}`}  value="10">10%</button></li>
            <li id="percentage-15"><button type="button" onClick={handleInput} name="tip" className={`percentage-button ${values.tip === "15" && 'active'}`}  value="15">15%</button></li>
            <li id="percentage-25"><button type="button" onClick={handleInput} name="tip" className={`percentage-button ${values.tip === "25" && 'active'}`}  value="25">25%</button></li>
            <li id="percentage-50"><button type="button" onClick={handleInput} name="tip" className={`percentage-button ${values.tip === "50" && 'active'}`}  value="50">50%</button></li>
            <li><input type="number" placeholder="Custom" id="custom-percentage-button" className="percentage-button"/></li>
          </ul>
          <h2>Number of People</h2><label htmlFor="input-people"><input id="input-people" className="input-people" name="people" type="number"
              value={values.people} min="1" onChange={handleInput}/></label>
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
