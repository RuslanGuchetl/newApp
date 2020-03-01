import React, {Component} from 'react';
import 'react-native-gesture-handler';
import Router from "./src/router";
import {Provider} from "react-redux";
import { store } from './src/store/store'

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router/>
        </Provider>
    );
  }
}
