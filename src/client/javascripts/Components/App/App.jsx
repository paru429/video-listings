import React from "react";
import SearchBar from '../SearchBar';
import VideoList from '../VideoList';
import VideoDetail from '../VideoDetail';
import youtube from '../../api/youtube';
import './App.scss';

const App = ({videos, selectedVideo, showLoader, updateVideos, updateSelectedVideo, updateShowLoader, fetchVideos}) => {
  const onTermSubmit = (text) => fetchVideos(text);

  return (
    <div className="app">
      <SearchBar onFormSubmit={onTermSubmit}/>
      {showLoader ? <div>Loading please wait!!!</div> : null}
      <div className="video-content">
        <div>
          {videos.length > 0 && <VideoDetail selectedVideo={selectedVideo}/>}
        </div>
        <div>
          {videos.length > 0 &&<VideoList videos={videos} setSelectedVideo={updateSelectedVideo} showLoader={showLoader}/>}
        </div>
      </div>
    </div>
  );
};

export default App;