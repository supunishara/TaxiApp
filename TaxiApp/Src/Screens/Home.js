import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {connect} from 'react-redux';

import {getCurrentLocation} from '../Actions/Home';

import Map from '../Components/MapContainer/index';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    this.props.getCurrentLocation();
  }

  render() {
    return (
      <View style={styles.Container}>
        <Map style={styles.Container} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    region: state.Home.region,
  };
};

const mapActionCreators = {
  getCurrentLocation,
};

export default connect(
  mapStateToProps,
  mapActionCreators,
)(Home);

const styles = StyleSheet.create({
  Container: {
    height: Height,
    width: Width,
    backgroundColor: 'white',
  },
});
