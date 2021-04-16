import {SET_FAVORITE_HERO, SET_SKIP_TUTORIAL} from './reducer';

export const setFavoriteHero = payload => dispatch => {
  dispatch({
    type: SET_FAVORITE_HERO,
    payload,
  });
};

export const setSkipTutorial = payload => dispatch => {
  dispatch({
    type: SET_SKIP_TUTORIAL,
    payload,
  });
};
