import {GET_CURRENT_LOCATION} from '../Actions/Actiontypes';

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
      return {
        ...state,
        region: {
          latitude: action.payload.coords.latitude,
          longitude: action.payload.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        },
      };
    default:
      return state;
  }
};

export default reducer;
