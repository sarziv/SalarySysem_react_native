import React, {Component} from 'react';
import navStyles from './styles/navStyles';
import {StyleSheet, Text, View} from 'react-native';

class Register extends Component {
    static navigationOptions ={
        ...navStyles
    };

    render() {

        return (
            <View style={styles.container}>
                <Text>Register Page</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    }
})
export default Register;