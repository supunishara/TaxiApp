import {createAction} from 'redux-actions';
import {GET_CURRENT_LOCATION} from './Actiontypes';

export const constants = {
  GET_CURRENT_LOCATION,
};

export const change = createAction(GET_CURRENT_LOCATION);
