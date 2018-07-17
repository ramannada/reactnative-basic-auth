import React from 'react'
import {View, ActivityIndicator} from 'react-native'

export class Spinner extends React.Component {
    render () {
        const {size} = this.props;

        return (
            <View style={styles.spinnerStyle}>
                <ActivityIndicator size={size || 'large'}/>
            </View>
        );
    }
}

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        flexDirection: 'row',
    }
};