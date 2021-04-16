export const CLEAR_STORE = 'CLEAR_STORE';
export const SET_CHARACTERS_LIST = 'SET_CHARACTERS_LIST';

const initialState = {
  charactersList: [],
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS_LIST: {
      return {
        ...state,
        charactersList: action.payload,
      };
    }

    case CLEAR_STORE: {
      return initialState;
    }

    default:
      return state;
  }
};

export default charactersReducer;
