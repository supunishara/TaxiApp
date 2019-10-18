import {eventChannel, END} from 'redux-saga';

import Geolocation from '@react-native-community/geolocation';

//https://recodes.co/react-native-consume-users-location-with-redux-saga/

// Configuration for the `geolocation.watchPosition`.
const WATCH_POSITION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000,
  distanceFilter: 10,
};

export function currentLocationChannel() {
  // Return the event channel.
  return eventChannel(emit => {
    const onError = error => emit(END);

    const watchId = Geolocation.getCurrentPosition(
      emit,
      onError,
      WATCH_POSITION_OPTIONS,
    );
    return () => Geolocation.clearWatch(watchId);
  });
}

// Define the function to open the location listener.
// export function locationChangeChannel() {
//   // Return the event channel.
//   return eventChannel(emit => {
//     // Close the channel after any errors in `watchPosition`.
//     const onError = error => emit(END);

//     // Invokes the `emit` callback whenever the location changes.
//     const watchId = watchPosition(emit, onError, WATCH_POSITION_OPTIONS);

//     // The `eventChannel` call should return the unsubscribe
//     // function, this will stop watching of the location of the user.
//     return () => navigator.geolocation.clearWatch(watchId);
//   });
// }

export default currentLocationChannel;
