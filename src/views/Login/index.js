import {Text, View, Button} from "react-native";
import React from 'react';
import {styles} from './index.styles'
import {connect} from 'react-redux';
import {login} from "../../actions";
import InputWithIcon from "../../components/InputWithIcon";
import {STATUSES} from "../../constants/api";
import {navigate} from "../../service/navigate";

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.navigate = navigate.bind(props.navigation);
    }

    login = () => {
        const {login} = this.props;
        login({...this.state, cb: this.navigate('Home')})
    };

    onChange = (name, value) => {
        this.setState({[name]: value});
    };

    render() {
        const {errors} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.mb5perc}>
                    <InputWithIcon placeholder="Your username goes here"
                                   icon="user"
                                   title="Username"
                                   errorMessage={errors.username || ''}
                                   name="username"
                                   onChange={this.onChange}
                    />
                    <InputWithIcon placeholder="Your password"
                                   icon="key"
                                   title="Password"
                                   errorMessage={errors.password || ''}
                                   name="password"
                                   onChange={this.onChange}
                                   secureTextEntry={true}
                    />
                    <Button onPress={this.login} title="Sign in"/>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    isError: state.login.status === STATUSES.ERROR,
    errors: state.form.errors,
});

const mapDispatchToProps = (dispatch) => ({
    login: params => {
        dispatch(login(params))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
