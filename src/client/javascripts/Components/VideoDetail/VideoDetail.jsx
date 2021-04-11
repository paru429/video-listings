import React from 'react';
import './VideoDetail.scss';

const VideoDetail = ({selectedVideo}) => {
    return (
        Object.keys(selectedVideo).length > 0 ? <div className="video-detail">
            <div className="video-detail__container video-detail__iframe-container">
                <iframe className="video-detail__iframe"
                    src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                    title={selectedVideo.snippet.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
            <div className="video-detail__container">
                <h4>{selectedVideo.snippet.title}</h4>
                <div>{selectedVideo.snippet.description}</div>
            </div>
        </div>
        : <div className="video-detail">Select any video</div>
    )
};

export default VideoDetail;