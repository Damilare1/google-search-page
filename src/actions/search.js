export const QUERY_RECEIVED = 'QUERY_RECEIVED'; 
export const RESULTS_RECEIVED = 'RESULTS_RECEIVED';

export const saveQuery = (query) => ( dispatch => (dispatch({ type:QUERY_RECEIVED, payload: query })));

export const saveResults = (results) => ( dispatch => (dispatch({ type:RESULTS_RECEIVED, payload: results})));

