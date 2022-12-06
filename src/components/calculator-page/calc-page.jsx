import React from 'react';
import Calculator from '../calculator-Features/calculator';
import './calc-page.css';
// adding the Calculator page component
const CalculatorPage = () => (
  <>
    <div className="CalculatorContainer">
      <h2 className="CalculatorTitle">let`s do some Math</h2>
      <div className="Calculator-box">
        <Calculator />
      </div>
    </div>
  </>
);
export default CalculatorPage;
