import { PureComponent } from 'react';
import Calculator from './components/calculator/calculator';
// imported PureComponent and Calculator class for the app class
class App extends PureComponent {
  // render the app class with the calculator component
  render() {
    return (
      <>
        <div>
          <Calculator />
        </div>
      </>
    );
  }
}

export default App;
