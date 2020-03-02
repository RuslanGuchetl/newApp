import {Text, View, Button} from "react-native";
import React from 'react';
import {STATUSES} from "../constants/api";
import {login} from "../actions";
import {connect} from "react-redux";

class Home extends React.Component {

    render() {
        const {user} = this.props;
        return (
            <View>
                <Text>WELCOME, {user.name}</Text>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(Home);