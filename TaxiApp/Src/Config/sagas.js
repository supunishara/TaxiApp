import {all, call, put, takeEvery} from 'redux-saga/effects';

import {change} from '../Actions/Home';
import {locationChangeChannel} from '../Services/Location';

function* locationChange({coords}) {
  // The `latitude`, `longitude`
  // parameters come from `watchPosition`.
  const {latitude, longitude} = coords;

  // Log the `LOCATION_CHANGE` action.
  yield put(change({latitude, longitude}));
}

function* openLocationWatch() {
  const channel = yield call(locationChangeChannel);
  yield takeEvery(channel, locationChange);
}

export default function* rootSaga() {
  yield all([openLocationWatch()]);
}
