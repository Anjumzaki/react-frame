import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import ImagePicked from './ImagePicked'
import Frame from './Frame'
import Plain from './Plain'

const Routes = () => (
   <Router>
      <Scene key = "root" hideNavBar={true}>
         <Scene  hideNavBar={true} key = "home" component = {ImagePicked} initial = {true} />
         <Scene  hideNavBar={true} key = "about" component = {Plain}/>
      </Scene>
   </Router>
)
export default Routes