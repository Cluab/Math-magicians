import { PureComponent } from 'react';
import CalculatorPage from './components/calculator-page/calc-page';
// imported PureComponent and Calculator class for the app class
class App extends PureComponent {
  // render the app class with the calculator component
  render() {
    return (
      <>
        <CalculatorPage />
      </>
    );
  }
}

export default App;
