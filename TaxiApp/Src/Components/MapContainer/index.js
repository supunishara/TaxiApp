import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const mapContainer = ({region, style}) => {
  return (
    <View style={style}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0922,
        }}>
        {region != undefined ? (
          <MapView.Marker coordinate={region} pinColor="green" />
        ) : null}
      </MapView>
    </View>
  );
};

export default mapContainer;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
