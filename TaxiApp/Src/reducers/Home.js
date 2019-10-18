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
      console.log('============action.latitude', action);
      return {
        ...state,
        region: {
          latitude: action.latitude,
          longitude: action.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        },
      };
    default:
      return state;
  }
};

export default reducer;
