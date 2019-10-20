import {all, call, put, takeEvery, take} from 'redux-saga/effects';
import Geolocation from '@react-native-community/geolocation';
import RNGooglePlaces from 'react-native-google-places';

import {
  GET_CURRENT_LOCATION,
  GET_CURRENT_LOCATION_SUCCESS,
  GET_LOCATION_INPUT,
  GET_ADDRESS_PREDICTIONS_SUCCESS,
} from '../Actions/Actiontypes';
import {
  locationChangeChannel,
  currentLocationChannel,
} from '../Services/Location';

//how to handle resolve and reject with yeild

const getUserLocation = () =>
  new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      location => resolve(location),
      error => reject(error),
    );
  });

function* CurrentLocation() {
  const location = yield call(getUserLocation);
  yield put({type: GET_CURRENT_LOCATION_SUCCESS, location});
}

const getPlacesPrediction = option =>
  RNGooglePlaces.getAutocompletePredictions(option.value);

function* getGooglePlaces() {
  //here we getting passed parameters of action
  const actionPayloadParams = yield take('GET_LOCATION_INPUT');
  const locations = yield call(
    getPlacesPrediction,
    actionPayloadParams.payload,
  );
  const result = yield locations;
  console.log('result', result);
  yield put({type: GET_ADDRESS_PREDICTIONS_SUCCESS, result});
}

export default function* rootSaga() {
  yield takeEvery(GET_CURRENT_LOCATION, CurrentLocation);
  yield takeEvery(GET_LOCATION_INPUT, getGooglePlaces);
  // yield takeEvery();
}
