import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {connect} from 'react-redux';

import {
  getCurrentLocation,
  getLocationInput,
  getAddressPredictions,
} from '../Actions/Home';

import Map from '../Components/MapContainer/index';
import SearchBox from '../Components/SearchBox/index';
import FlatList from '../Components/FlatList/index';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    this.props.getCurrentLocation();
  }

  renderItem = item => {
    return (
      <View style={styles.rowItem}>
        <Text>{item.primaryText}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.Container}>
        <Map style={styles.Container} region={this.props.region} />
        <SearchBox
          style={styles.searchBox}
          placeholder="Choose Pick-Up Location"
          title="Pick-Up"
          onChangeText={text =>
            this.props.getLocationInput({value: text, id: 'pickUp'})
          }
          value={this.props.textInputValuePickUp}
        />
        <SearchBox
          style={styles.bottomSearchBox}
          placeholder="Choose Drop-Off Location"
          title="Drop-Off"
          onChangeText={text =>
            this.props.getLocationInput({value: text, id: 'dropOff'})
          }
          value={this.props.textInputValueDropOff}
        />
        <FlatList
          data={this.props.predictions}
          // renderItem={this.renderItem}
          renderItem={({item, index}) => this.renderItem(item)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    region: state.Home.region,
    resultType: state.Home.resultType,
    predictions: state.Home.predictions,
    textInputValuePickUp: state.Home.inputData.textInputValuePickUp,
    textInputValueDropOff: state.Home.inputData.textInputValueDropOff,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentLocation: () => dispatch(getCurrentLocation()),
    getLocationInput: value => dispatch(getLocationInput(value)),
    toggleLocationInput: value => dispatch(toggleLocationInput(value)),
    getAddressPredictions: () => dispatch(getAddressPredictions()),
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
  searchBox: {
    top: 20,
    position: 'absolute',
    width: Width,
  },
  bottomSearchBox: {
    top: 70,
    position: 'absolute',
    width: Width,
  },
  rowItem: {
    width: Width,
    height: 30,
  },
});
