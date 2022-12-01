import { useState } from 'react';
import './calculator.css';
import calculate from '../../logic/calculate';
// imported Purecomponent and style file for the Calculator class
// imported calculate function to apply them in the component
let obj = {};
// eslint-disable-next-line react/prop-types
const Calculator = () => {
  const [sum, setResult] = useState(0);

  // added an empty object that will hold our information for the calculator
  // added a constructor for applying the sum on calculator screen.

  // create a function that takes the button content and updating the empty object
  const operate = (e) => {
    const equal = e.target.textContent;
    obj = calculate(obj, equal);
    // update the sate of the props to the new object
    // sum = obj.next || obj.operation || obj.total || 0;
    setResult(obj.next || obj.operation || obj.total || 0);
    console.log(obj);
  };

  // render class

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="screen">{sum}</div>
          <button type="button" className="btn light-gray" onClick={operate}>AC</button>
          <button type="button" className="btn light-gray" onClick={operate}>+/-</button>
          <button type="button" className="btn light-gray" onClick={operate}>%</button>
          <button type="button" className="btn orange" onClick={operate}>÷</button>
          <button type="button" className="btn light-gray" onClick={operate}>7</button>
          <button type="button" className="btn light-gray" onClick={operate}>8</button>
          <button type="button" className="btn light-gray" onClick={operate}>9</button>
          <button type="button" className="btn orange" onClick={operate}>x</button>
          <button type="button" className="btn light-gray" onClick={operate}>4</button>
          <button type="button" className="btn light-gray" onClick={operate}>5</button>
          <button type="button" className="btn light-gray" onClick={operate}>6</button>
          <button type="button" className="btn orange" onClick={operate}>+</button>
          <button type="button" className="btn light-gray" onClick={operate}>1</button>
          <button type="button" className="btn light-gray" onClick={operate}>2</button>
          <button type="button" className="btn light-gray" onClick={operate}>3</button>
          <button type="button" className="btn orange" onClick={operate}>-</button>
          <button type="button" className="btn light-gray zero" onClick={operate}>0</button>
          <button type="button" className="btn light-gray" onClick={operate}>.</button>
          <button type="button" className="btn orange" onClick={operate}>=</button>
        </div>
      </div>
    </>
  );
};

//  exporting class Calculator as default
export default Calculator;
