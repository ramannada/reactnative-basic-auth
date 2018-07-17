import React from 'react';
import {Text} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common';
import firebase from 'firebase';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "",
            loading: false
        };
    }

    onButtonPress () {
        const {email, password} = this.state;

        this.setState({error: "", loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFailed.bind(this));
            });
    }

    onLoginSuccess () {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    onLoginFailed () {
        this.setState({
            loading: false,
            error: 'Authentication Failed'
        });
    }

    renderView () {
        if (this.state.loading) {
            return (<Spinner size="small"/>);
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
        );
    }

    render () {
        const {email, password} = this.state;

        return (
            <Card>
                <CardSection>
                    <Input 
                        label="email"
                        placeholder="user@gmail.com"
                        value={email}
                        onChangeText={email => {
                            this.setState({email: email});
                            console.log(this.state.email);
                        }}
                    />
                </CardSection>
                
                <CardSection>
                    <Input
                        label="password"
                        placeholder="password"
                        value={password}
                        secureTextEntry
                        onChangeText={password => {
                            this.setState({password: password});
                            console.log(this.state.password);
                        }}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                    
                <CardSection>
                    {this.renderView()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
