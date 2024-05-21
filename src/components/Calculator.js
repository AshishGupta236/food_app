import React, {useState} from "react"

export default function Calculator (){
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const buttons = [
        ['AC', '+/-', '%', '÷'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['00', '0', '.', '='],
    ];

    function handleButtonClick(value){
        if (value == 'AC') {
            setInput('');
            setResult(null);
        } else if (value == '+/-') {
            setInput((prevInput) => (prevInput[0] === '-' ? prevInput.slice(0) : ' ' + prevInput));
        } else if (value == '%') {
            setInput((prevInput) => (String(parseFloat(prevInput)/100)))
        } else if (value == '=') {
            try{
                setResult(eval(input)); 
            } catch {
                setResult("Error");
            }
        } else {
            setInput((prevInput) => prevInput + value);
        }
    }
    return (
        <div >
            <p>{result != null ? result : input}</p>
            {buttons.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((btn, btnIndex) => 
                        <button key={btnIndex} onClick={() => handleButtonClick(btn)} >{btn}</button>
                    )}
                </div>
            ))}
        </div>
    )
}