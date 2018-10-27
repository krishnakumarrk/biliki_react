import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "native-base";
import Icon from "react-native-vector-icons/EvilIcons";
import GLOBALS from "../../theme/constatnts";

class LocationInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={[styles.searchSection, this.props.inputStyle]}>
        <Icon
          style={styles.searchIcon}
          name="location"
          size={30}
          color="#ce2738"
        />
        <TouchableOpacity>
          <Text style={styles.searchText}>{GLOBALS.EXPLORE_PLACES}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LocationInput;

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    paddingTop: 5,
    paddingLeft: 2,
    paddingBottom: 5,
    paddingRight: 0,
    borderBottomColor: "#f4f4f4",
    borderBottomWidth: 1
  },
  searchText: {
    fontSize: 14,
    fontWeight: "700",
    padding: 5
  }
});
