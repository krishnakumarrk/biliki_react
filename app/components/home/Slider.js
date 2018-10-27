import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");
const sliderMargins = width / 24;

export default class extends Component {
  render() {
    return (
      <View style={styles.sliderContainer}>
        <Swiper
          style={styles.swiperStyle}
          horizontal={true}
          autoplay
          activeDot={
            <View
              style={{
                backgroundColor: "#ce2738",
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
        >
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require("../../assets/coupon_1.png")}
            />
          </View>
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require("../../assets/coupon_2.jpg")}
            />
          </View>
          <View
            style={styles.slide}
            title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require("../../assets/coupon_3.jpeg")}
            />
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = {
  sliderContainer: {
    width,
    height: 220,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 3,
    borderWidth: 0,
    overflow: "hidden"
  },

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  image: {
    width,
    flex: 1
  },
  swiperStyle: {
    flex: 1,
    width: 100 + "%"
  }
};
