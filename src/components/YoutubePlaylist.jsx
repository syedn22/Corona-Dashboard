import React, { Component } from "react";
import config from "../config.json";
import http from "../services/httpService";
class YoutubePlaylist extends Component {
  state = {
    playList: [],
  };

  async componentDidMount() {
    const result = await http.get(config.playList);
    console.log(result.data.items);
    this.setState({ playList: result.data.items });
  }
  render() {
    return (
      <div className="card-header">
        <div className="card-body"></div>
      </div>
    );
  }
}

export default YoutubePlaylist;
