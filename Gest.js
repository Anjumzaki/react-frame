/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, Image, StyleSheet, Text, View } from 'react-native';
import Gestures from 'react-native-easy-gestures';
import photo from './assets/12.jpg'

export default class Gest extends Component {
  render() {
    return (
      <View >
        <Gestures
        onEnd={(event, styles) => {
          this.props.reArrangeLevels();
        }}
        >
          <Image
            source={photo}
            style={{
              width: 200,
              height: 300,
            }}
          />
        </Gestures>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
