import { QUERY_RECEIVED, RESULTS_RECEIVED } from '../actions/search';

const defaultState = {
    query: '',
    results: [],
}

export default (state = defaultState, action)=> {
    switch (action.type) {
        case QUERY_RECEIVED:
          return Object.assign({}, state,
            { query: action.payload });
        case RESULTS_RECEIVED:
          return Object.assign({}, state, { results: action.payload });
        default:
          return state;
      }
}