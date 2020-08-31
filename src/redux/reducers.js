import {
  SET_QUERY,
  SET_QUERY_RESULT,
  SET_LOADING,
} from "./constants";

const init = {
  api: "http://api.tvmaze.com/search/shows",
  query: "",
  queryResult: [],
  isLoading: false,
  pastResults: null,
};

const Reducer = (state = init, action) => {
  switch (action.type) {
    case SET_QUERY:
      return { ...state, query: action.value };
    case SET_QUERY_RESULT:
      return { ...state, queryResult: action.value };
    case SET_LOADING:
      return { ...state, isLoading: action.value };

    default:
      return state;
  }
};

export default Reducer;
