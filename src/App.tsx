import * as React from 'react';
import './css/main.css';
import { Provider } from 'react-redux';
import store from './store-index';
import MainGridContainer from './containers/MainGridContainer';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MainGridContainer />
        </div>
      </Provider >
    );
  }
}

export default App;
