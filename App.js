import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import 'semantic-ui-css/semantic.min.css';
import './App.css';
// import MyRouter from './components/ReactRouter/Router.js';
// import NavigationBar from './components/Nav/NavigationBar';
import Home from './screen/Home/Home';

// import {createStore, applyMiddleware} from "redux";
// import {Provider} from "react-redux";
// import Age from './components/Redux/AgeIncDecReduxSage';
// import createSagaMiddleware from 'redux-saga';
// import reducer from './store/reducer';
// import { watchAgeUp } from './sagas/saga';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(watchAgeUp);


class App extends Component {
  render() {
    return (
      <div className="App overflow-hidden">
        {/* <MyRouter /> */}
        {/* <NavigationBar />
        {this.props.children} */}
        <Home />
        {/* <Provider store={store}>
          <Age />
        </Provider> */}
    </div>
    );
  }
}


export default App;
