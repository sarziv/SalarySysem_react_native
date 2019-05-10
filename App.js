import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, ImageBackground, Text, View} from 'react-native';


const bgimage = require('./Image/homeimage.jpg');

export default class App extends Component<Props> {
  render() {
    return (
        <ImageBackground source={(bgimage)} style={{width: '100%',height:'100%'}}>
          <View style={styles.container}>
            <Text style={styles.welcome}>Salary system</Text>
            <Text style={styles.greeting}>Track, Progess, Improve.</Text>
            <View style={styles.buttonBox}>
              <TouchableOpacity>
                <Text style={styles.button}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity>
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