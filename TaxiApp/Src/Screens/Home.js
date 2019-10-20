import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {connect} from 'react-redux';

import {
  getCurrentLocation,
  getLocationInput,
  toggleLocationInput,
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

  onInputFocused(id, Value) {
    console.log(id);
    console.log(Value);
    this.props.toggleLocationInput('dropOff');
    // this.props.getLocationInput({value: Value, id: id});
  }

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
          onFocus={() =>
            this.onInputFocused('pickUp', this.props.textInputValuePickUp)
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
          onFocus={() =>
            this.onInputFocused('dropOff', this.props.textInputValueDropOff)
          }
          value={this.props.textInputValueDropOff}
        />
        <FlatList />
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
});
