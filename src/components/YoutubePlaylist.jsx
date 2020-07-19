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
  handleKey(item) {
    // console.log( item.snippet.description.);
    return item.id;
  }

  handleClick(item) {
    console.log(item);
  }

  render() {
    const { playList } = this.state;
    return (
      <div className="container">
        {playList.map((item) =>
          item.snippet.description ? (
            <div className="card bg-light m-3" key={this.handleKey(item)}>
              <div className="row">
                <div className="col">
                  <img
                    className="card-img-top img-width float-left m-4"
                    src={item.snippet.thumbnails.high.url}
                    alt="Card image cap"
                  ></img>
                </div>
                <div className="col">
                  <div className="card-body">
                    <h5 className="card-title">{item.snippet.title}</h5>
                    <p className="card-text ">
                      {item.snippet.description.substring(0, 500)}
                    </p>
                    <button className="btn btn-primary" onClick={()=>this.handleClick(item)}>Watch Video</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    );
  }
}

export default YoutubePlaylist;
