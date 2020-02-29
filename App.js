import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import InitScreen from "./src/views/Init";
import LoginScreen from "./src/views/Login";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Init">
            <Stack.Screen name="Init" component={InitScreen} options={{title: 'Welcome'}}/>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  title: 'Login',
                  headerStyle: {
                    backgroundColor: '#f4511e',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    flex: 1,
                    textAlign: 'center',
                  },
                }}
            />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}
