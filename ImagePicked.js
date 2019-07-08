import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';
import ImagePicker from "react-native-image-picker";
import { Actions } from 'react-native-router-flux'; // New code


export default class ImagePicked extends Component {

  state = {
    pickedImage: null,
  }
  toggleStatus(){
    this.setState({
      status:!this.state.status
    });
    console.log('toggle button handler: '+ this.state.status);
  }

  reset = () => {
    this.setState({
      pickedImage: null
    });
  }

  /**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info below in README)
 */

  pickImageHandler = () => {
    ImagePicker.showImagePicker({title: "Pick an Image", maxWidth: 800, maxHeight: 600}, res => {
      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error);
      } else {
        this.setState({
          pickedImage: { uri: res.uri }
        });
        
      }
    });
  }

  resetHandler = () =>{
    this.reset();
  }

  render() {
    return (
      
   
      <View style={styles.container}>
        
         <Text style={styles.textStyle}>Pick Image From Camera and Gallery </Text>
        <View style={styles.placeholder}>
          <Image source={this.state.pickedImage} style={styles.previewImage} />
        </View>
        <View style={styles.button}>

          <Button title="Pick Image" onPress={this.pickImageHandler} />
          
          <Button title="Reset" onPress={this.resetHandler} />
          </View>
          <View style={styles.container}>
      <Text
        style={styles.welcome}
        onPress={() => Actions.Frame()} // New Code
      >
        Scarlet Screen
      </Text>
    </View>
        </View>
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems:"center"  
  },
  textStyle: {
    fontWeight:"bold",
    fontSize:30,
    textAlign:"center",
    color:"red",
    marginTop:10     
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "70%",
    height: 280,
    marginTop:50, 
  },
  button: {
    width: "80%",
    marginTop:20,
    flexDirection:"row",
    justifyContent: "space-around"
  },  
  previewImage: {
      width: "100%",
      height: "100%"
  }
});
