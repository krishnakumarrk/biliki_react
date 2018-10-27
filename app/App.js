import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TabNavigation, TabButton } from '@opengeekslab/react-native-tab-navigator';
import HomeScreen from './screens/HomeScreen';
import AnotherScreen from './screens/AnotherScreen';
import AccountScreen from './screens/AccountScreen';
import ExploreScreen from './screens/ExploreScreen';

const homeIcon = require('./assets/home.png');
const exploreIcon = require('./assets/search.png');
const accountIcon = require('./assets/user.png');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.tabNavigator}>
        <TabNavigator />
      </View>
    );
  }
}

const navigationRouter = {
  Screen_1: {
    screen: HomeScreen,
    screenOptions: {
      title: 'Accueil',
      showTitle: true,
      animated: true,
      tabIcon: homeIcon,
      animation: [
        {
          name: 'rotationY',
          type: 'bouncing',
        },
      ],
    },
  },
  Screen_2: {
    screen: ExploreScreen,
    screenOptions: {
      title: 'Explorer',
      showTitle: true,
      tabIcon: exploreIcon,
      animation: [
        {
          name: 'rotationY',
          type: 'bouncing',
        },
      ],
    },
  },
  Screen_3: {
    screen: AnotherScreen,
    screenOptions: {
      title: 'Autre',
      tabIcon: homeIcon,
      animated: true,
      animation: [],
    },
  },
  Screen_4: {
    screen: AccountScreen,
    screenOptions: {
      title: 'Compte',
      tabIcon: accountIcon,
      animation: [
        {
          name: 'rotationY',
          type: 'bouncing',
        },
      ],
    },
  }
};

const defaultConfig = {
  lazy: true,
  defaultRoute: 'Screen_1',
  screenOptions: {
    showTitle: true,
    animated: true,
    buttonView: TabButton,
    activeTintColor: '#ce2738',
    inactiveTintColor: '#3f403e',
    animation: ['ripple', 'rotationZ'],
  },
};

const TabNavigator = TabNavigation(navigationRouter, defaultConfig);


const styles = StyleSheet.create({
  tabNavigator: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
});
