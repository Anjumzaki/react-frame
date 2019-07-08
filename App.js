import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Frame from './Frame';
import ImagePicked from './ImagePicked'

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="ImagePicked"
          component={ImagePicked}
          title="Scarlet"
          initial
        />
        <Scene
          key="Frame"
          component={Frame}
          title="Gray"
        />
      </Scene>
    </Router>
  );
}

export default App;