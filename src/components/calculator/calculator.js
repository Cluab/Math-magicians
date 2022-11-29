import { PureComponent } from 'react';
import './calculator.css';

class Calculator extends PureComponent {
  render() {
    return (
      <>
        <div className="container">
          <div className="wrapper">
            <div className="screen">0</div>
            <div className="btn light-gray">AC</div>
            <div className="btn light-gray">+/-</div>
            <div className="btn light-gray">%</div>
            <div className="btn orange">/</div>
            <div className="btn light-gray">7</div>
            <div className="btn light-gray">8</div>
            <div className="btn light-gray">9</div>
            <div className="btn orange">X</div>
            <div className="btn light-gray">4</div>
            <div className="btn light-gray">5</div>
            <div className="btn light-gray">6</div>
            <div className="btn orange">+</div>
            <div className="btn light-gray">1</div>
            <div className="btn light-gray">2</div>
            <div className="btn light-gray">3</div>
            <div className="btn orange">-</div>
            <div className="btn light-gray zero">0</div>
            <div className="btn light-gray">.</div>
            <div className="btn orange">=</div>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
