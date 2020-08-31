import React from "react";
import Axios from "axios";
import Spinner from "react-spinner-material";
import parse from "html-react-parser";
import noImage from "assets/noimage.png";

import "./styles.css";
import { connect } from "react-redux";

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "http://api.tvmaze.com/shows",
      info: {},
    };
  }

  componentDidMount = async () => {
    const { id } = this.props.match.params;
    const { url } = this.state;
    const result = await Axios.get(`${url}/${id}`);
    this.setState({ info: result.data });
  };

  goBack = () => {
    this.props.history.replace("/search");
  };

  render() {
    const { info } = this.state;

    if (Object.keys(info).length > 0) {
      return (
        <div className="movie-info" id="movie-info">
          <span onClick={() => this.goBack()}>
            <i className="fa fa-arrow-left"></i>
          </span>
          <div
            className="image-container"
            style={{
              backgroundImage: `url(${
                info.image ? info.image.original : noImage
              })`,
            }}
          />
          <h2>{info.name}</h2>
          <p>
            <span>Generos:</span>{" "}
            {info.genres ? info.genres.map(i => i).join(", ") : null}
          </p>
          <p>
            <span>Lenguaje:</span> {info.language}
          </p>
          <h3>Summary</h3>
          <div  >{info.summary ? parse(info.summary) : null}</div >
        </div>
      );
    }

    return (
      <div className="loader-container">
        <Spinner size={35} color="#FFFFFF" visible={true} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  api: state,
  query: state.query,
  queryResult: state.queryResult,
});

export default connect(mapStateToProps)(MovieDetails);
