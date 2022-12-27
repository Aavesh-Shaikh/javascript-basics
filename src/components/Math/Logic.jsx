import React, { useState } from "react"
import "./Logic.css"

const Logic = (props) => {
    const [firstNumber, setFirstNumber] = useState()
    const [secondNumber, setSecondNumber] = useState()
   

    const firstNumberHandler = (e) => {
        setFirstNumber(+e.target.value);
    }
    const secondNumberHandler = (e) => {
        setSecondNumber(+e.target.value);
    }
    const additionHandler = () => {
        props.setSumResult((state) => state = (firstNumber + secondNumber));
    }

    const substractionHandler = () => {
        props.setSubResult(firstNumber - secondNumber);
    }
    const multiplicationHandler = () => {
        props.setMultResult(firstNumber * secondNumber);
    }
    const divisionHandler = () => {
        props.setDiviResult(firstNumber / secondNumber);
    }


    return (
        <React.Fragment>
            <div className="inputs">
                <input onChange={firstNumberHandler} type="number" placeholder="Type First Number" />
                <input onChange={secondNumberHandler} type="number" placeholder="Type Second Number" />
            </div>
            <div className="buttons">
                <button onClick={additionHandler} className="add_btn">Addition</button>
                <button onClick={substractionHandler} className="sub_btn">Substraction</button>
                <button onClick={multiplicationHandler} className="mult_btn">Multiplication</button>
                <button onClick={divisionHandler} className="divi_btn">Division</button>
            </div>
        </React.Fragment>
    )

}
export default Logic;