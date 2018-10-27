import React, { Component } from 'react';
import { View, Text, SafeAreaView, Platform} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import HomeScreen from '../../screens/HomeScreen';
import AnotherScreen from '../../screens/AnotherScreen';
import AccountScreen from '../../screens/AccountScreen';
import { Icon } from 'react-native-vector-icons/Ionicons';
import ExploreScreen from '../../screens/ExploreScreen';

export default class HomeTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView>
          <AppTabNavigator/>
      </SafeAreaView>
    );
  }
}

const AppTabNavigator = createMaterialTopTabNavigator({

    Home:{
      screen: HomeScreen,
      navigationOption:{
        tabBarLabel: 'Acueil',
        tabBarIcon: () => (
          <Icon name="ios-home" color=""></Icon>
        )
      }
    },
    Explore:{
      screen: ExploreScreen,
      navigationOption:{
        tabBarLabel: 'Explorer',
        tabBarIcon: () => (
          <Icon name="ios-search"></Icon>
        )
      }
    },
    Another:{
      screen: AnotherScreen,
      navigationOption:{
        tabBarLabel: 'Autres',
        tabBarIcon: () => (
          <Icon name="ios-home"></Icon>
        )
      }
    },
    Account:{
      screen: AccountScreen,
      navigationOption:{
        tabBarLabel: 'Compte',
        tabBarIcon: () => (
          <Icon name="ios-person"></Icon>
        )
      }
    }
  
  }, {
    initialRouteName: 'Home',
    activeTintColor:"white",
    shifting: "false"
  })
