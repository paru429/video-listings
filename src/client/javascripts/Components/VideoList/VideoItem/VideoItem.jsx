import React from 'react';
import './VideoItem.scss';

const VideoItem = ({video, setSelectedVideo}) => {
    const { snippet: {title, thumbnails: {medium: {url}}} } = video;
    return(
        <div className="video-item" onClick={() => setSelectedVideo(video)}>
            <div className="video-item__thumbnail">
                <img src={url} />
            </div>
            <div className="video-item__title">{title}</div>
        </div>
    )
};

export default VideoItem;