import { SEARCH, GET_GOOGLE_SUGGEST } from '../actions/actionTypes';

const initialState = {
  results : [],
  suggestQueries : [],
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
    return {...state, results: action.results };
    case GET_GOOGLE_SUGGEST:
    return {...state, suggestQueries: action.results };
    default:
      return state;
  }
};


export default rootReducer;
