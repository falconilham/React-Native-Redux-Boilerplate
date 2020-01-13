import React, { Component } from 'react';
import { createAppContainer, createDrawerNavigator, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './container/Home'
import Login from './container/Login'

import {Animated, SafeAreaView} from 'react-native';
import ModalWrapper from './components/Modal/index'


const MainPages = createStackNavigator(
  {
    StartupPage: { screen: Login },
    MovieDetail: { screen: Home },
  },
  {
    initialRouteName: 'StartupPage',
    headerMode: 'none',
    navigationOptions: {
      tabBarVisible: false,
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
      },
    }),
    animationEnabled: false,
    swipeEnabled: false,
    lazy: true,
  }
);

// THIS IS USEFUL FOR FUTURE USE IF WANT TO IMPLEMENT SIDEBAR
const AppNavigator = createDrawerNavigator(
  {
    Main: { screen: MainPages },
  },
  {
    initialRouteName: 'Main',
  }
);

export default class App extends Component{
  navigator

  render() {
    const AppContainer = createAppContainer(AppNavigator);
    return (
      <SafeAreaView style={{flex: 1}}>
        <Wrapper>
          <AppContainer
            screenProps={'locked-closed'}
            ref={c => {
              this.navigator = c;
            }}
          />
          <ModalWrapper />
        </Wrapper>
      </SafeAreaView>
    );
  }
}