import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../Screens/Home';

const Route = createStackNavigator({
  Home: {
    screen: Home,
  },
});

export default createAppContainer(Route);
