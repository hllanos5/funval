import { useState } from 'react'

function App() {
  return (
    <>
     <header><img src="./images/logo.svg" alt=""/></header>
      <div className="general-wrapper">
        <div className="data-wrapper">
          <h1>Bill</h1><label for="input-bill"><input className="input-bill" id="input-bill" type="number" value="0"
              min="0"/></label>
          <h2>Select Tip %</h2>
          <ul>
            <li id="percentage-5"><button type="button" className="percentage-button" value="5">5%</button></li>
            <li id="percentage-10"><button type="button" className="percentage-button" value="10">10%</button></li>
            <li id="percentage-15"><button type="button" className="percentage-button" value="15">15%</button></li>
            <li id="percentage-25"><button type="button" className="percentage-button" value="25">25%</button></li>
            <li id="percentage-50"><button type="button" className="percentage-button" value="50">50%</button></li>
            <li><input type="number" placeholder="Custom" id="custom-percentage-button" className="percentage-button"/></li>
          </ul>
          <h2>Number of People</h2><label for="input-people"><input id="input-people" className="input-people" type="number"
              value="1" min="1"/></label>
        </div>
        <div className="result-wrapper">
          <div className="result-txt">
            <div className="text-amount">
              <div>
                <h2>Tip Amount</h2>
                <p>/ person</p>
              </div>
              <h3>$<span id="tip-amount">0</span></h3>
            </div>
            <div className="total-amount">
              <div>
                <h2>Total</h2>
                <p>/ person</p>
              </div>
              <h3>$<span id="total">0</span></h3>
            </div>
          </div><button type="button" id="reset-button" className="reset-button">RESET</button>
        </div>
      </div>
    </>
  )
}

export default App
