import {createAction} from 'redux-actions';
import {GET_CURRENT_LOCATION} from './Actiontypes';

export const getCurrentLocation = () => ({
  type: GET_CURRENT_LOCATION,
});
