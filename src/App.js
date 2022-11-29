import { PureComponent } from 'react';
import Calculator from './components/calculator/calculator';

class App extends PureComponent {
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
