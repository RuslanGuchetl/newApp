import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from "../views/Login";
import Home from "../views/Home";
import {loginOptions} from "./constants";

const Stack = createStackNavigator();

export default class Index extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Init">
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={loginOptions}
                    />
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={loginOptions}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
