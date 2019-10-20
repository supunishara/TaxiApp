import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, FlatList} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const FlatListComponent = ({}) => {
  return (
    <View style={styles.searchResultWrapper}>
      <FlatList
        horizontal={true}
        contentContainerStyle={{paddingBottom: 8}}
        // data={this.state.imagesArray}
        // renderItem={({item, index}) => this.renderSliderItem(item, index)}
      />
    </View>
  );
};

export default FlatListComponent;

const styles = StyleSheet.create({
  searchResultWrapper: {
    top: 220,
    position: 'absolute',
    width: Width,
    flex: 1,
    backgroundColor: 'white',
    opacity: 0.9,
  },
  primaryText: {
    fontWeight: 'bold',
    color: '#373737',
  },
  secondaryText: {
    fontStyle: 'italic',
    color: '#7D7D7D',
  },
  leftContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    borderLeftColor: '#7D7D7D',
  },
  leftIcon: {
    fontSize: 20,
    color: '#7D7D7D',
  },
  distance: {
    fontSize: 12,
  },
});
