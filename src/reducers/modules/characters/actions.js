import {SET_CHARACTERS_LIST} from './reducer';

export const setCharactersList = payload => dispatch => {
  dispatch({
    type: SET_CHARACTERS_LIST,
    payload,
  });
};
