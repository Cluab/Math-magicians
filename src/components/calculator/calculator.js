import { PureComponent } from 'react';
import './calculator.css';
import calculate from '../../logic/calculate';
// imported Purecomponent and style file for the Calculator class
class Calculator extends PureComponent {
  obj = {}

  constructor(props) {
    super(props);
    this.state = {

      sum: '5',

    };
    this.operate = this.operate.bind(this);
  }

   operate = (e) => {
     const equal = e.target.textContent;
     this.obj = calculate(this.obj, equal);
     this.setState({
       sum: this.obj.next || this.obj.operation || this.obj.total || 0,
     });
     // render class
   }

   render() {
     const { sum } = this.state;
     return (
       <>
         <div className="container">
           <div className="wrapper">
             <div className="screen">{sum}</div>
             <button type="button" className="btn light-gray" onClick={this.operate}>AC</button>
             <button type="button" className="btn light-gray" onClick={this.operate}>+/-</button>
             <button type="button" className="btn light-gray" onClick={this.operate}>%</button>
             <button type="button" className="btn orange" onClick={this.operate}>÷</button>
             <button type="button" className="btn light-gray" onClick={this.operate}>7</button>
             <button type="button" className="btn light-gray" onClick={this.operate}>8</button>
             <button type="button" className="btn light-gray" onClick={this.operate}>9</button>
             <button type="button" className="btn orange" onClick={this.operate}>x</button>
             <button type="button" className="btn light-gray" onClick={this.operate}>4</button>
             <button type="button" className="btn light-gray" onClick={this.operate}>5</button>
             <button type="button" className="btn light-gray" onClick={this.operate}>6</button>
             <button type="button" className="btn orange" onClick={this.operate}>+</button>
             <button type="button" className="btn light-gray" onClick={this.operate}>1</button>
             <button type="button" className="btn light-gray" onClick={this.operate}>2</button>
             <button type="button" className="btn light-gray" onClick={this.operate}>3</button>
             <button type="button" className="btn orange" onClick={this.operate}>-</button>
             <button type="button" className="btn light-gray zero" onClick={this.operate}>0</button>
             <button type="button" className="btn light-gray" onClick={this.operate}>.</button>
             <button type="button" className="btn orange" onClick={this.operate}>=</button>
           </div>
         </div>
       </>
     );
   }
}

//  exporting class Calculator as default
export default Calculator;
