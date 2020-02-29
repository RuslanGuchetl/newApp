import {Text, View, Button} from "react-native";
import React, {useState} from 'react';
import {styles} from './index.styles'

const LoginScreen = (props) => {
  const [count, setCount] = useState(0);

  return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login Screen!</Text>
        <Text style={[styles.instructions, styles.mb5perc]}>Login Login, Login</Text>
        <Text style={styles.instructions}>Вы кликнули {count} раз</Text>
        <View style={styles.mb5perc}>
          <Button onPress={() => setCount(count + 1)} title="Нажми на меня ska"/>
        </View>
        <Text style={styles.instructions}>Хачу дамой!</Text>
        <Button title="Верните к мамочке!" onPress={() => props.navigation.goBack()} />
      </View>
  )
};

export default LoginScreen;
