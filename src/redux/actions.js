import { SET_QUERY, SET_QUERY_RESULT, SET_LOADING } from "./constants";

export const setQuery = value => ({
  type: SET_QUERY,
  value,
});

export const setQueryResult = value => ({
    type: SET_QUERY_RESULT,
    value
})

export const setLoading = value => ({
    type: SET_LOADING,
    value
})
