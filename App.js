import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCdRhkQKbo7yo9apDhO9JVvZhuVl-wKapk",
      authDomain: "manager-45adc.firebaseapp.com",
      databaseURL: "https://manager-45adc.firebaseio.com",
      projectId: "manager-45adc",
      storageBucket: "manager-45adc.appspot.com",
      messagingSenderId: "707157887924"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>

    );
  }
}
