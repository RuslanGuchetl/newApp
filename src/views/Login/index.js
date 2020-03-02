import {Text, View, Button} from "react-native";
import React from 'react';
import {styles} from './index.styles'
import {connect} from 'react-redux';
import {login} from "../../actions";
import InputWithIcon from "../../components/InputWithIcon";
import {STATUSES} from "../../constants/api";

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'test@test.test',
            name: 'John Doe',
            password: '1231231231'
        }
    }

    login = () => {
        const {email, password} = this.state;
        const {login} = this.props;
        login({email, password})
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
                    />
                    <InputWithIcon placeholder="Your password"
                                   icon="key"
                                   title="Password"
                                   errorMessage={errors.password || ''}
                                   name="password"
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
