import React from 'react';
import Calculator from '../calculator-Features/calculator';
import './calc-page.css';

const CalculatorPage = () => (
  <>
    <div className="CalculatorContainer">
      <h2 className="CalculatorTitle">let`s do some Math</h2>
      <div className="Calculator-container">
        <Calculator />
      </div>
    </div>
  </>
);

// eslint-disable-next-line import/prefer-default-export
export default CalculatorPage;
