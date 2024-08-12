import React from 'react'

export function PanelDerecha({totals,reset}) {
  return (
    <>
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
    </>
  )
}
