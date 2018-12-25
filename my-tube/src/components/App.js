import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList'; 
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {videos: [], selectedVideo: null};

  componentDidMount() {
    this.onSearchSubmit('videos');
  }

  onSearchSubmit = async (search) => {
    // console.log(search);
    const resp = await youtube.get('/search',  {
      params: {
        q: search
      }
    });
    // console.log(resp);
    this.setState({
      videos: resp.data.items,
      selectedVideo: resp.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    // console.log("From onVideoSelect", video);
    this.setState({selectedVideo: video});
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
