import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.categoryContainer}>
        <ImageBackground
          source={this.props.imgUrl}
          style={styles.catImgBc}
          imageStyle={styles.catImg}
        >
          <View style={styles.catTitleWrapper}>
            <Text style={styles.catText}>{this.props.catTitle}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Category;

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    alignItems: "center",
    borderColor: "#dddddd",
    marginRight: 5
  },
  catImgBc: {
    width: 110,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 0,
    borderRadius: 5
  },
  catImg: {
    resizeMode: "cover",
    overflow: "hidden"
  },
  catText: {
    fontSize: 18,
    color: "#fff",
    backgroundColor: "transparent"
  },
  catTitleWrapper: {
    backgroundColor: "rgba(0,0,0, 0.5)",
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center"
  }
});
