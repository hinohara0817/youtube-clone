import React, {Component} from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import youtube from './api/youtube'; 

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }
  componentDidMount(){
    this.handleSubmit('test')
  }
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video});
  }
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyDmNop8n0RHCjZv0S8GaPZW9s5Sx5WA_ag',
        q: searchTerm,
      }
    });
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
  }
  render(){
    const {selectedVideo, videos} = this.state;
    return(
      <Grid justify="center" container spacing={10} >
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
export default App;
