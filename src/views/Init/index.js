import {Platform, Text, View, Button} from "react-native";
import React, {useState} from 'react';
import {styles} from "./index.styles";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

const InitScreen = (props) => {
  const [count, setCount] = useState(0);
  return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={[styles.instructions, styles.mb5perc]}>{instructions}</Text>
        <Text style={styles.instructions}>Вы кликнули {count} раз</Text>
        <View style={styles.mb5perc}>
          <Button onPress={() => setCount(count + 1)} title={'Нажми на меня'}/>
        </View>
        <Text style={styles.instructions}>Го на логин, бро</Text>
        <Button title="Login Page" onPress={() => props.navigation.push('Login', {user: 'Kek'})}/>
      </View>
  )
};

export default InitScreen;
