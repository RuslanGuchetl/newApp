import React, {Component} from 'react';
import 'react-native-gesture-handler';
import Router from "./src/router/index";
import {Provider} from "react-redux";
import {store} from './src/store/store'
import {ThemeProvider} from 'react-native-elements';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider>
                    <Router/>
                </ThemeProvider>
            </Provider>
        );
    }
}
