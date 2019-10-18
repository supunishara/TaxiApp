import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {connect} from 'react-redux';

import {getCurrentLocation} from '../Actions/Home';

import Map from '../Components/MapContainer/index';
import SearchBox from '../Components/SearchBox/index';

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
        <Map style={styles.Container} region={this.props.region} />
        <SearchBox />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    region: state.Home.region,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentLocation: () => dispatch(getCurrentLocation()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

const styles = StyleSheet.create({
  Container: {
    height: Height,
    width: Width,
    backgroundColor: 'white',
  },
});
