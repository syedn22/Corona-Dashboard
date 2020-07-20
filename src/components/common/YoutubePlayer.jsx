import React, { Component } from "react";
import ReactPlayer from "react-player";

class YoutubePlayer extends Component {
  handleClick = () => {
    this.props.history.replace("/youtube");
  };
  render() {
    return (
      <React.Fragment>
        <div className="card m-5 bg-light">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${this.props.match.params.id}`}
            controls={true}
            className="mx-auto m-4 "
            width={800}
            height={500}
          />

          <button className="btn btn-primary" onClick={this.handleClick}>
            Back
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default YoutubePlayer;
