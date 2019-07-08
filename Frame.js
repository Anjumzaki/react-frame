/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, Image, StyleSheet, Text, View } from 'react-native';
import Gest from './Gest';
import photo from './assets/frame.png'




const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerIndex: 2,
      gestIndex: 1
    }
    this.reArrangeLevels=this.reArrangeLevels.bind(this);
  }
  reArrangeLevels(){
      this.setState({
        containerIndex: 2,
        gestIndex: 1
      });
  }
  render() {
    return (
      <View style={styles.container}>



        <Gest reArrangeLevels={this.reArrangeLevels} style={{ ...{ zIndex: this.state.gestIndex }, ...styles.gest }} />


        <Image
          onTouchStart={() => {
            let newState = { ...this.state };
            newState.containerIndex = -1;
            this.setState(newState);

          }}
          source={photo}
          style={{ ...{ zIndex: this.state.containerIndex }, ...styles.photo }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  photo: {
    width: '80%',
    height: 350,
  },
  gest: {
    // position:'relative',
    // top:200,
  }

});
