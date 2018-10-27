import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <TouchableOpacity  >
          <Image source={this.props.cityImg} style={styles.imgStyle} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default City;

const styles = StyleSheet.create({
  containerStyle: {
    marginRight: 6
  },
  imgStyle: {
    height: 110,
    width: 110,
    borderWidth: 0,
    borderRadius: 10,
    overflow: "hidden",
    resizeMode: "stretch"
  }
});
