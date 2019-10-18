import {
  GET_CURRENT_LOCATION,
  GET_CURRENT_LOCATION_SUCCESS,
} from '../Actions/Actiontypes';

const initialState = {
  region: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_LOCATION:
      console.log('============action.latitude', action);
      return {
        ...state,
      };

    case GET_CURRENT_LOCATION_SUCCESS:
      const {latitude, longitude} = action.location.coords;
      console.log('============latitude', latitude);
      return {
        ...state,
        region: {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        },
      };
    default:
      return state;
  }
};

export default reducer;
