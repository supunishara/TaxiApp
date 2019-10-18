import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, TextInput, Text} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const SearchBox = () => {
  return (
    <View style={styles.searchBox}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>PICK UP</Text>
        <TextInput
          style={styles.inputSearch}
          numberOfLines={1}
          placeholder="Choose PickUp Location"
          // onChangeText={text => {
          //     this.props.profileFieldsChange({
          //         prop: propKey,
          //         value: text
          //     });
          // }}
        />
      </View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchBox: {
    top: 20,
    position: 'absolute',
    width: Width,
  },
  inputWrapper: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 0,
    backgroundColor: 'white',
    opacity: 0.9,
    borderRadius: 7,
  },
  inputSearch: {
    fontSize: 14,
  },
  label: {
    fontSize: 10,
    fontStyle: 'italic',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 0,
  },
});
