import React, { Component } from "react";
import config from "../config.json";
import http from "../services/httpService";
import { Link } from "react-router-dom";
import Pagination from "./common/Pagination";
import { paginate } from "./../utils/paginate";

class YoutubePlaylist extends Component {
  state = {
    playList: [],
    pageSize: 3,
    currentPage: 1,
  };

  async componentDidMount() {
    const result = await http.get(config.playList);
    this.setState({ playList: result.data.items });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  getPagedData() {
    const { pageSize, currentPage } = this.state;
    const playList=[...this.state.playList];
    const filtered=playList.filter((f)=>(f.snippet.description)?f:'');
    const paginatedData = paginate(filtered, currentPage, pageSize);

    return { totalCount: filtered.length, playList: paginatedData };
  }

  render() {
    const { pageSize, currentPage } = this.state;
    const { totalCount, playList } = this.getPagedData();
    return (
      <div>
        {playList.map((item) => (
          <div className="card bg-light m-3" key={item.id}>
            <div className="row">
              <div className="col">
                <img
                  className="card-img-top img-width float-left m-4"
                  src={item.snippet.thumbnails.high.url}
                  alt="Card  cap"
                ></img>
              </div>
              <div className="col">
                <div className="card-body">
                  <h5 className="card-title">{item.snippet.title}</h5>
                  <p className="card-text ">
                    {item.snippet.description.substring(0, 500)}
                  </p>
                  <Link to={`/youtube/${item.snippet.resourceId.videoId}`}>
                    <button className="btn btn-primary">Watch Video</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Pagination
          itemCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default YoutubePlaylist;
