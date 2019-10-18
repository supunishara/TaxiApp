import {all, call, put, takeEvery} from 'redux-saga/effects';
import Geolocation from '@react-native-community/geolocation';

import {
  GET_CURRENT_LOCATION,
  GET_CURRENT_LOCATION_SUCCESS,
} from '../Actions/Actiontypes';
import {
  locationChangeChannel,
  currentLocationChannel,
} from '../Services/Location';

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

export default function* rootSaga() {
  yield takeEvery(GET_CURRENT_LOCATION, CurrentLocation);
}
