import React, {Component} from 'react';
import navStyles from './styles/navStyles';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

class LoginUser extends Component {
    static navigationOptions = {
        ...navStyles
    };

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.createUser}>Login</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder={'Email'}
                />

                <TextInput
                    style={styles.inputStyle}
                    placeholder={'Password'}
                />
                <TouchableOpacity>
                    <Text style={styles.createUserButton}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        marginTop: '20%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle: {
        fontFamily: 'ShareTechMono-Regular',
        textAlign: 'center',
        fontSize: 20,
        width: '60%',
        height: 60,
        borderBottomWidth: 1,
        borderColor: 'black',
        marginBottom: 4,
    },
    createUser: {
        marginBottom: 5,
        color: 'black',
        fontFamily: 'ShareTechMono-Regular',
        fontSize: 30,
    },
    createUserButton: {
        marginTop: 20,
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 20,
        marginRight: 5,
        fontFamily: 'ShareTechMono-Regular',
        paddingTop: 8,
        height: 40,
        width: 100,
        textAlign: 'center',
        backgroundColor: 'black',
    }
});

export default LoginUser;