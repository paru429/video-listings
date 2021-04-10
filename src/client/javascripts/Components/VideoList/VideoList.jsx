import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, setSelectedVideo, showLoader}) => {
    const videoList = videos.map(video => <VideoItem video={video} setSelectedVideo={setSelectedVideo} key={video.id.videoId}/>)
    return <div>{videoList}</div>
};

export default VideoList;