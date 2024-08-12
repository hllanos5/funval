import { Button } from "./Button"


export function ButtonsPanel({display, setDisplay}) {
    const aOption = [
      "7","8","9","AC","4","5","6","C","1","2","3","/","-","0","+","*","="
    ]
    const aOperator = ["/","-","+","*"];

    function handleClick(e){
        const target = e.target;
        if(target.tagName === 'BUTTON'){
            if(aOperator.includes(target.value) && aOperator.includes(display[display.length-1])){
                
                const deleteLast = display.slice(0, display.length-1);
                setDisplay(deleteLast+target.value);

                return;
            }
            if(target.value === 'AC'){
                const deleteLast = display.slice(0, display.length-1)
                setDisplay(deleteLast)
                return;
            }
            if(target.value === 'C'){
                setDisplay("");
                return;
            }
            if(target.value === '='){
                setDisplay(eval(display));
                return;
            }

            setDisplay(display+target.value);
        }
    }

    return (
    <div className="buttons" onClick={handleClick}>
        {
        aOption.map(option => 
            <Button key={option} value={option}/>
        )
        }              
    </div>
    )
}