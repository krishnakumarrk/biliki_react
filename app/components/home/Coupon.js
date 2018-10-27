import React, { Component } from "react";
import { Card, Text } from "native-base";
import { StyleSheet, ImageBackground, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import StarRating from "react-native-star-rating";
import GLOBALS from "../../theme/constatnts";

class Coupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      couponDeadline: 0,
      ratingScore: 3.5
    };
    this.style = props.style;
  }

  render() {
    return (
      <Card style={styles.cardStyle}>
        <ImageBackground
          source={this.props.imgUrl}
          style={styles.CouponImg}
          imageStyle={styles.cImgStyle}
        >
          <LinearGradient
            colors={[
              "rgba(0, 0, 0, 0.7)",
              "rgba(0, 0, 0, 0.3)",
              "rgba(0, 0, 0, 0)",
              "rgba(0, 0, 0, 0)",
              "rgba(0, 0, 0, 0)",
              "rgba(0, 0, 0, 0)",
              "rgba(0, 0, 0, 0)"
            ]}
            style={styles.contentContainer}
          >
            <View style={styles.couponInfoContainer}>
              <View style={styles.couponViews}>
                <Icon name="eye" size={15} color="rgba(255, 255, 255, 0.9)" />
                <Text style={styles.vCouponsStyle}>165</Text>
              </View>
              <View style={styles.couponDownloads}>
                <Icon name="cloud-download" size={15} color="#a8d04c" />
                <Text style={styles.vCouponsStyle}>165</Text>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>

        <View style={styles.couponHeader}>
          <Text style={styles.couponTitle}>{this.props.offreTitle}</Text>
          <StarRating
            maxStars={1}
            rating={this.state.ratingScore}
            fullStarColor={"#fecc09"}
            starSize={15}
            iconSet={"FontAwesome"}
          />
          <Text style={styles.couponRatingText}>{this.state.ratingScore}</Text>
        </View>
        <View style={styles.couponBody}>
          <Text style={styles.couponDescription}>
            {this.props.offreDescription}
          </Text>
          <Text style={styles.couponDeadLine}>
            {this.state.couponDeadline + " " + GLOBALS.RESTANTS}
          </Text>
        </View>
      </Card>
    );
  }
}

export default Coupon;

const styles = StyleSheet.create({
  CouponImg: {
    height: 175,
    width: 250,
    flex: 1,
    borderWidth: 0
  },
  cardStyle: {
    marginRight: 10,
    borderWidth: 0,
    borderRadius: 5,
    width: 250
  },
  couponContainer: {
    flex: 1
  },
  cImgStyle: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  contentContainer: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 2,
    paddingVertical: 2,
    overflow: "visible",
    alignItems: "flex-start",
    alignSelf: "stretch",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  couponViews: {
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "baseline",
    flex: 1
  },
  vCouponsStyle: {
    fontSize: 13,
    color: "#fff",
    marginLeft: 3
  },
  couponDownloads: {
    marginRight: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "baseline",
    flex: 0
  },
  dCouponsStyle: {
    fontSize: 13,
    color: "#fff",
    marginLeft: 5
  },
  couponInfoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline"
  },
  couponHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    margin: 5
  },
  couponTitle: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 15,
    color: "black"
  },
  couponBody: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5
  },
  couponDescription: {
    flex: 1,
    flexWrap: "wrap",
    fontSize: 12
  },
  couponDeadLine: {
    color: "red",
    fontSize: 11
  },
  couponRatingText: {
    marginLeft: 3,
    fontSize: 13
  }
});
