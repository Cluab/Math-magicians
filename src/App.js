import { PureComponent } from 'react';
import Calculator from './components/calculator-Features/calculator';
import { Header } from './components/header/Hearder';
// imported PureComponent and Calculator class for the app class
class App extends PureComponent {
  // render the app class with the calculator component
  render() {
    return (
      <>
        <Header />
        <div>
          <Calculator />
        </div>
      </>
    );
  }
}

export default App;
