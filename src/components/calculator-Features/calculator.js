import { useState } from 'react';
import './calculator.css';
import calculate from '../../logic/calculate';
// imported useState and style file for the Calculator class
// imported calculate function to apply them in the component

// create an object that will store calculate function logic
let obj = {};

const Calculator = () => {
  // use useState to replace the constructor props in the class
  const [sum, setResult] = useState(0);

  // create a function that takes the button content and updating the empty object
  const operate = (e) => {
    const equal = e.target.textContent;
    obj = calculate(obj, equal);
    // update the sem of the useState to the new object
    setResult(obj.next || obj.operation || obj.total || 0);
  };

  // return function

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="screen">{sum}</div>
          <button type="button" className="btn light-gray" onClick={operate}>
            AC
          </button>
          <button type="button" className="btn light-gray" onClick={operate}>
            +/-
          </button>
          <button type="button" className="btn light-gray" onClick={operate}>
            %
          </button>
          <button type="button" className="btn orange" onClick={operate}>
            ÷
          </button>
          <button type="button" className="btn light-gray" onClick={operate}>
            7
          </button>
          <button type="button" className="btn light-gray" onClick={operate}>
            8
          </button>
          <button type="button" className="btn light-gray" onClick={operate}>
            9
          </button>
          <button type="button" className="btn orange" onClick={operate}>
            x
          </button>
          <button type="button" className="btn light-gray" onClick={operate}>
            4
          </button>
          <button type="button" className="btn light-gray" onClick={operate}>
            5
          </button>
          <button type="button" className="btn light-gray" onClick={operate}>
            6
          </button>
          <button type="button" className="btn orange" onClick={operate}>
            +
          </button>
          <button type="button" className="btn light-gray" onClick={operate}>
            1
          </button>
          <button type="button" className="btn light-gray" onClick={operate}>
            2
          </button>
          <button type="button" className="btn light-gray" onClick={operate}>
            3
          </button>
          <button type="button" className="btn orange" onClick={operate}>
            -
          </button>
          <button
            type="button"
            className="btn light-gray zero"
            onClick={operate}
          >
            0
          </button>
          <button type="button" className="btn light-gray" onClick={operate}>
            .
          </button>
          <button type="button" className="btn orange" onClick={operate}>
            =
          </button>
        </div>
      </div>
    </>
  );
};

//  exporting Calculator function as default
export default Calculator;
