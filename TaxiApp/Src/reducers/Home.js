import {
  GET_CURRENT_LOCATION,
  GET_CURRENT_LOCATION_SUCCESS,
  GET_LOCATION_INPUT,
  TOGGLE_LOCATION_INPUT,
  GET_ADDRESS_PREDICTIONS,
  GET_ADDRESS_PREDICTIONS_SUCCESS,
} from '../Actions/Actiontypes';

const initialState = {
  region: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  },
  inputData: {
    textInputValuePickUp: '',
    textInputValueDropOff: '',
  },
  resultType: {
    pickUp: false,
    dropOff: false,
  },
  predictions: [],
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
    case GET_LOCATION_INPUT:
      // const {value} = action;
      console.log('here', action.payload);
      if (action.payload.id === 'pickUp') {
        return {
          ...state,
          inputData: {
            textInputValuePickUp: action.payload.value,
            textInputValueDropOff: state.inputData.textInputValueDropOff,
          },
        };
      } else {
        return {
          ...state,
          inputData: {
            textInputValuePickUp: state.inputData.textInputValuePickUp,
            textInputValueDropOff: action.payload.value,
          },
        };
      }

    case TOGGLE_LOCATION_INPUT:
      if (action.payload === 'pickUp') {
        // console.log('pickUp');
        return {
          ...state,
          resultType: {
            pickUp: true,
            dropOff: false,
          },
          predictions: [],
        };
      } else {
        // console.log('dropOff');
        return {
          ...state,
          resultType: {
            pickUp: false,
            dropOff: true,
          },
          predictions: [],
        };
      }
    case GET_ADDRESS_PREDICTIONS:
      return {
        ...state,
      };
    case GET_ADDRESS_PREDICTIONS_SUCCESS:
      console.log('action===========here', action);
      return {
        ...state,
        predictions: action.result,
      };

    default:
      return state;
  }
};

export default reducer;
