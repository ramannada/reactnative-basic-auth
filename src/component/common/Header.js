import React, { Component } from 'react';
import {View, Text} from 'react-native';

export class Header extends React.Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles .textStyle}>{this.props.children}</Text>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#f8f8f8',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        elevation: 1,
        position: 'relative',
        marginBottom: 10,
    },
    textStyle: {
        fontSize: 20,
    }
}