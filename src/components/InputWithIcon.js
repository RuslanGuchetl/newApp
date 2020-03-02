import {Input, Text, Icon} from "react-native-elements";
import React from "react";
import '../styles/components.css';
import View from "react-native-web/dist/exports/View";
import {connect} from "react-redux";
import {nullError} from "../actions/form";

function InputWithIcon({placeholder, icon, title, errorMessage, _nullError, name, secureTextEntry, onChange}){

    const handleOnChange = e => {
        const {value} = e.target;
        onChange(name, value)
    };

    return (
        <View className="input-with-icon-container">
            <Text h4 className="label">{title}</Text>
            <Input
                placeholder={placeholder}
                errorStyle={{borderBottomColor: 'red'}}
                errorMessage={errorMessage}
                className="input"
                onKeyPress={_nullError(name)}
                onChange={handleOnChange}
                secureTextEntry={secureTextEntry}
                leftIcon={
                    <Icon
                        name={icon}
                        type="font-awesome"
                        size={24}
                        color="grey"
                        className="icon-item"
                    />
                }
                leftIconContainerStyle={{marginLeft: 0}}
            />
        </View>
    )
};
const mapDispatchToProps = (dispatch) => {
    return {
        _nullError: name => () => dispatch(nullError(name))
    }
};

export default connect(null, mapDispatchToProps)(InputWithIcon);