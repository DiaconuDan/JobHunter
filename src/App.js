import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    render() {
        return (
            <View>
                <Header headerText="LOGIN" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
