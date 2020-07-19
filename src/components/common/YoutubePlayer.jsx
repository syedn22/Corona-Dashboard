import React, { Component } from "react";
import ReactPlayer from "react-player";

class YoutubePlayer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=nF4hg6g7SwE"
            controls={true}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default YoutubePlayer;
