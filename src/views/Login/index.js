import {Text, View, Button} from "react-native";
import React from 'react';
import {styles} from './index.styles'
import {connect} from 'react-redux';
import {login} from "../../actions/Login";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'test@test.test',
      password: '1231231231'
    }
  }

  login = () => {
    const {email, password} = this.state;
    const {login} = this.props;
    login({email, password})
  };

  render() {
    const {navigation} = this.props;
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Login Screen!</Text>
          <Text style={[styles.instructions, styles.mb5perc]}>Login Login, Login</Text>
          <View style={styles.mb5perc}>
            <Button onPress={this.login} title="Нажми на меня ska"/>
          </View>
          <Text style={styles.instructions}>Хачу дамой!</Text>
          <Button title="Верните к мамочке!" onPress={() => navigation.goBack()}/>
        </View>
    )
  }
}

const mapStateToProps = state => ({
  isFetching: state.login.isFetching,
  error: state.login.error,
  errorMessage: state.login.errorMessage,
  status: state.login.status,
});

const mapDispatchToProps = (dispatch) => ({
  login: params => {
    dispatch(login(params))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
