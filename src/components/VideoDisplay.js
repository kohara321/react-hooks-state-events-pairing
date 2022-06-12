import React from 'react';
import Header from './Header';

function VideoDisplay({video}){
    return (
        <div>
            <iframe
            width="919"
            height="525"
            src={video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title={video.title}
            />
            <Header title={video.title} views={video.views} created={video.createdAt}/>
        </div>
    )
}

export default VideoDisplay;