import React, {Component} from 'react';
import navStyles from './styles/navStyles';
import {StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';

class RegisterUser extends Component {
    static navigationOptions ={
        ...navStyles
    };

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.createUser}>Create a new user</Text>
                <TextInput
                    style={styles.inputStyle}
                placeholder={'Email'}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder={'Password'}
                />
                <TouchableOpacity>
                    <Text style={styles.createUserButton}>Create</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        marginTop:'20%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle:{
        fontFamily: 'ShareTechMono-Regular',
        textAlign: 'center',
        fontSize:20,
        width:'60%',
        height:60,
        borderBottomWidth:1,
        borderColor:'black',
        marginBottom:4,
    },
    createUser: {
        marginBottom:15,
        color:'black',
        fontFamily: 'ShareTechMono-Regular',
        fontSize: 30,
    },
    createUserButton: {
        marginTop:20,
        color:'white',
        fontWeight:'bold',
        borderRadius:20,
        marginRight:5,
        fontFamily: 'ShareTechMono-Regular',
        paddingTop:8,
        height: 40,
        width: 100,
        textAlign: 'center',
        backgroundColor: 'black',
    }
});

export default RegisterUser;