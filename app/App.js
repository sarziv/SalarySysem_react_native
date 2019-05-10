import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import {TouchableOpacity, StyleSheet, ImageBackground, Text, View,Button} from 'react-native';
import Login from './Login';
import Register from './Register';
import navStyles from './styles/navStyles';
const bgimage = require('../Image/homeimage.jpg');

class App extends Component {
  static navigationOptions = {
    header:null,
    ...navStyles
  };
  goToLogin = () => {
  this.props.navigation.navigate('Login')
  }
  goToRegsiter = () => {
    this.props.navigation.navigate('Register')
  }
  render() {

    return (
        <ImageBackground source={(bgimage)} style={{width: '100%',height:'100%'}}>
          <View style={styles.container}>
            <Text style={styles.welcome}>Salary system</Text>
            <Text style={styles.greeting}>Track, Progess, Improve.</Text>
            <View style={styles.buttonBox}>
              <TouchableOpacity onPress={this.goToLogin}>
               <Text style={styles.button}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.goToRegsiter}>
                <Text style={styles.button}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

    );
  }
}

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonBox: {
    color:'white',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  welcome: {
    color:'white',
    fontFamily: 'ShareTechMono-Regular',
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  greeting: {
    color:'white',
    fontFamily: 'ShareTechMono-Regular',
    fontSize: 15,
    paddingBottom:20,
  },
  button: {
    color:'black',
    fontWeight:'bold',
    borderRadius:20,
    marginRight:5,
    fontFamily: 'ShareTechMono-Regular',
    paddingTop:8,
    height: 40,
    width: 100,
    textAlign: 'center',
    backgroundColor: 'white',
  },
});

export default createStackNavigator({
  Home: {
    screen:App
  },
  Login: {
    screen:Login
  },
  Register: {
    screen:Register
  }
})