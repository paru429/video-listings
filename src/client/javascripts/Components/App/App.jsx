import React from "react";
import SearchBar from '../SearchBar';
import VideoList from '../VideoList';
import VideoDetail from '../VideoDetail';
import youtube from '../../api/youtube';
import './App.scss';

const App = ({videos, setVideos, selectedVideo, setSelectedVideo, showLoader, setShowLoader}) => {
  const onTermSubmit = async (text) => {
    setShowLoader(true);
    try {
      const response = await youtube.get('/search', {
        params: {
          q: text
        }
      });

      response.data && setVideos(response.data.items)
      response.data && setSelectedVideo(response.data.items[0]);
      setShowLoader(false);
    }
    catch {
      setShowLoader(false);
      console.log('..... Error', err);
    }
  };

  return (
    <div className="app">
      <SearchBar onFormSubmit={onTermSubmit}/>
      {showLoader ? <div>Loading please wait!!!</div> : null}
      <div className="video-content">
        <div>
          {videos.length > 0 && <VideoDetail selectedVideo={selectedVideo}/>}
        </div>
        <div>
          {videos.length > 0 &&<VideoList videos={videos} setSelectedVideo={setSelectedVideo} showLoader={showLoader}/>}
        </div>
      </div>
    </div>
  );
};

export default App;