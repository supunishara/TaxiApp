import {createAction} from 'redux-actions';
import RNGooglePlaces from 'react-native-google-places';

import {
  GET_CURRENT_LOCATION,
  GET_LOCATION_INPUT,
  TOGGLE_LOCATION_INPUT,
  GET_ADDRESS_PREDICTIONS,
} from './Actiontypes';

export const getCurrentLocation = () => ({
  type: GET_CURRENT_LOCATION,
});

export const getLocationInput = payload => ({
  type: GET_LOCATION_INPUT,
  payload,
});

export const toggleLocationInput = payload => ({
  type: TOGGLE_LOCATION_INPUT,
  payload,
});
