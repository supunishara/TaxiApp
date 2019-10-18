import {all, call, put, takeEvery} from 'redux-saga/effects';

import {change} from '../Actions/Home';
import {
  locationChangeChannel,
  currentLocationChannel,
} from '../Services/Location';

// function* locationChange({coords}) {
//   // The `latitude`, `longitude`
//   // parameters come from `watchPosition`.
//   const {latitude, longitude} = coords;

//   // Log the `LOCATION_CHANGE` action.
//   yield put(change({latitude, longitude}));
// }

// function* openLocationWatch() {
//   const channel = yield call(currentLocationChannel);
//   yield takeEvery(channel, locationChange);
// }

function* CurrentLocation({coords}) {
  const {latitude, longitude} = coords;
  yield put(change({latitude, longitude}));
}

function* openCurrentLocation() {
  const channel = yield call(currentLocationChannel);
  yield takeEvery(channel, CurrentLocation);
}

export default function* rootSaga() {
  yield all([openCurrentLocation()]);
}
