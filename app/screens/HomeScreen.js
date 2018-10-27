import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList, ScrollView } from "react-native";
import HomeSlider from "../components/home/Slider";
import Category from "../components/home/Category";
import GLOBALS from "../theme/constatnts";
import Coupon from "../components/home/Coupon";
import City from "../components/home/Citiy";
import LocationInput from "../components/home/LocationInput";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          imgUrl: require("../assets/restaurant.jpg"),
          catTitle: "Restaurant"
        },
        {
          imgUrl: require("../assets/accessoires.jpg"),
          catTitle: "Accessoires"
        },
        {
          imgUrl: require("../assets/optic.jpeg"),
          catTitle: "Optique"
        },
        {
          imgUrl: require("../assets/sport.jpeg"),
          catTitle: "Sport"
        }
      ],

      Coupons: [
        {
          id: 1,
          imgUrl: require("../assets/coupon_1.png"),
          offreTitle: "Lorem ipsum dolor sit amet",
          offreDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit."
        },
        {
          id: 2,
          imgUrl: require("../assets/coupon_2.jpg"),
          offreTitle: "Lorem ipsum dolor sit amet",
          offreDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit."
        },
        {
          id: 3,
          imgUrl: require("../assets/coupon_3.jpeg"),
          offreTitle: "Lorem ipsum dolor sit amet",
          offreDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit."
        }
      ],

      Cities: [
        {
          id: 1,
          cityImg: require("../assets/casa.jpg")
        },
        {
          id: 2,
          cityImg: require("../assets/agadir.jpg")
        },
        {
          id: 3,
          cityImg: require("../assets/fes.jpg")
        },
        {
          id: 3,
          cityImg: require("../assets/kech.jpg")
        },
        {
          id: 4,
          cityImg: require("../assets/tng.jpg")
        },
        {
          id: 5,
          cityImg: require("../assets/casa.jpg")
        }
      ]
    };
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HomeSlider />
          <LocationInput inputStyle={styles.locationSearch} />
          <View style={styles.homeTitlesWrapper}>
            <Text style={styles.homeTitles}>{GLOBALS.PARCOURIR_TITLE}</Text>
          </View>
          <View style={styles.homeLists}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={this.state.categories}
              renderItem={({ item }) => (
                <Category imgUrl={item.imgUrl} catTitle={item.catTitle} />
              )}
            />
          </View>
          <View style={styles.homeTitlesWrapper}>
            <Text style={styles.homeTitles}> {GLOBALS.RESTAURANTS_TITLE} </Text>
          </View>
          <View style={styles.homeLists}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={this.state.Coupons}
              renderItem={({ item }) => (
                <Coupon
                  imgUrl={item.imgUrl}
                  offreTitle={item.offreTitle}
                  offreDescription={item.offreDescription}
                />
              )}
            />
          </View>
          <View style={styles.homeTitlesWrapper}>
            <Text style={styles.homeTitles}> {GLOBALS.ACCESSOIRES_TITLE} </Text>
          </View>
          <View style={styles.homeLists}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={this.state.Coupons}
              renderItem={({ item }) => (
                <Coupon
                  imgUrl={item.imgUrl}
                  offreTitle={item.offreTitle}
                  offreDescription={item.offreDescription}
                />
              )}
            />
          </View>
          <View style={styles.homeTitlesWrapper}>
            <Text style={styles.homeTitles}> {GLOBALS.CITIES} </Text>
          </View>
          <View style={styles.homeLists}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={this.state.Cities}
              renderItem={({ item }) => <City cityImg={item.cityImg} />}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  homeTitles: {
    fontSize: 20,
    fontWeight: "700",
    color: "black"
  },
  homeLists: {
    marginLeft: GLOBALS.HOMELAYOUTMARGINS.MARGIN_LEFT
  },
  homeTitlesWrapper: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: GLOBALS.HOMELAYOUTMARGINS.MARGIN_LEFT,
    marginBottom: GLOBALS.HOMELAYOUTMARGINS.MARGIN_RIGHT
  },
  locationSearch: {
    marginLeft: GLOBALS.LOCATION_SEARCH_MARGINS.MARGIN_LEFT,
    marginRight: GLOBALS.LOCATION_SEARCH_MARGINS.MARGIN_RIGHT,
    marginTop: GLOBALS.LOCATION_SEARCH_MARGINS.MARGINT_TOP
  }
});
