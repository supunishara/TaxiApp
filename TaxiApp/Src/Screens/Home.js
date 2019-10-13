import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default class Home extends Component {
  render() {
    return <View style={styles.Container}></View>;
  }
}

const styles = StyleSheet.create({
  Container: {
    height: Height,
    width: Width,
    backgroundColor: 'red',
  },
});
