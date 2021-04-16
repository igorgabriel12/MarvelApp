export const CLEAR_STORE = 'CLEAR_STORE';
export const SET_FAVORITE_HERO = 'SET_FAVORITE_HERO';
export const SET_SKIP_TUTORIAL = 'SET_SKIP_TUTORIAL';

const initialState = {
  favoriteHero: {},
  skippedTheTutorial: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE_HERO: {
      return {
        ...state,
        favoriteHero: action.payload,
      };
    }

    case SET_SKIP_TUTORIAL: {
      return {
        ...state,
        skippedTheTutorial: action.payload,
      };
    }

    case CLEAR_STORE: {
      return initialState;
    }

    default:
      return state;
  }
};

export default userReducer;
