import { PureComponent } from 'react';
import Header from './components/header/Header';
// imported PureComponent and Calculator class for the app class
class App extends PureComponent {
  // render the app class with the calculator component
  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

export default App;
