import React, { Component } from 'react';
import { getPlaylist } from '../services/PlayList';
class YoutubePlaylist extends Component {
    state = { 
     }

    async componentDidMount()
     {
         this.setState({Playlist:await getPlaylist()})
         console.log(this.state.Playlist);
     }
    render() { 
        return <div className="card-header">
            <div className="card-body"></div>
        </div>
    }
}
 
export default YoutubePlaylist;