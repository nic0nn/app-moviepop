// libraries
import React from "react";
import Spinner from "react-spinner-material";

// components
import MovieContainer from "./parts/movieContainer";

// styles
import "./styles.css";
import Axios from "axios";
import { connect } from "react-redux";
import {
  setQuery,
  setQueryResult,
  setLoading,
} from "redux/actions";

class Search extends React.Component {

  handleChange = e => {
    this.props.setQuery(e.currentTarget.value);
  };

  handleSearch = async e => {
    const { api, query } = this.props;
    if (!(e.key === "Enter")) return;

    this.props.setLoading(true);
    const result = await Axios.get(`${api}?q=${query}`);
    this.props.setQueryResult(result.data);
    this.props.setLoading(false);
  };

  componentDidMount = () => {

    if (this.props.history.action !== "REPLACE") {
      this.props.setQuery("");
      this.props.setQueryResult([]);
    }
  };

  render() {
    const { query, queryResult, isLoading } = this.props;
    return (
      <div className="search">
        <input
          autoComplete="off"
          type="text"
          name="search"
          id="search"
          placeholder="Buscar"
          value={query}
          onChange={e => this.handleChange(e)}
          onKeyPress={e => this.handleSearch(e)}
        />
        {!isLoading ? (
          <React.Fragment>
            <MovieContainer movies={queryResult} />
          </React.Fragment>
        ) : (
          <div className="loader-container">
            <Spinner size={35} color="#FFFFFF" visible={true} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  api: state.api,
  query: state.query,
  queryResult: state.queryResult,
  isLoading: state.isLoading,
  pastResults: state.pastResults,
});

const mapDispatchToProps = dispatch => ({
  setQuery: value => dispatch(setQuery(value)),
  setQueryResult: value => dispatch(setQueryResult(value)),
  setLoading: value => dispatch(setLoading(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
