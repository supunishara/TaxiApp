import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Text,
  Image,
} from 'react-native';
import LottieView from 'lottie-react-native';

import {locationLottie} from '../../Config/Images';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const SearchBox = ({
  style,
  placeholder,
  title,
  onChangeText,
  onFocus,
  value,
}) => {
  return (
    <View style={style}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>{title}</Text>
        <View style={styles.rowWrapper}>
          <Image
            source={locationLottie}
            style={{
              height: 25,
              width: 25,
              resizeMode: 'stretch',
              borderRadius: 7,
            }}
          />
          <View style={{flex: 1}}>
            <TextInput
              style={styles.inputSearch}
              numberOfLines={1}
              placeholder={placeholder}
              onChangeText={onChangeText}
              onFocus={onFocus}
              value={value}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
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
    paddingLeft: 20,
  },
  label: {
    fontSize: 10,
    fontStyle: 'italic',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 0,
  },
  rowWrapper: {
    flexDirection: 'row',
  },
});
