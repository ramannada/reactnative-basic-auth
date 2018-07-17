import React from 'react';
import {TextInput, View, Text} from 'react-native';

export class Input extends React.Component {

    render() {
        const {label, value, onChangeText, placeholder, secureTextEntry} = this.props;
        const {containerStyle, labelStyle, textInputStyle} = styles;

        return(
            <View style={containerStyle}>
                <Text style={labelStyle}>{label}</Text>
                <TextInput 
                    value={value}
                    onChangeText={onChangeText}
                    style={textInputStyle}
                    autoCorrect={false}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        height: 40,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    textInputStyle: {
        width: 100,
        height: 20,
        color: "#000",
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 3,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    }
};