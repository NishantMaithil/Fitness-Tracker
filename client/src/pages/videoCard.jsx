import React from 'react';
import VideoHolder from './Tutorial.jsx';

const VideoCard = () => {
 
  const youtubeLink1 = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; 
  const youtubeLink2 = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; 
  const youtubeLink3 = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; 
  return <><VideoHolder youtubeLink={youtubeLink1} />;
    <VideoHolder youtubeLink={youtubeLink2} />;
    <VideoHolder youtubeLink={youtubeLink3}
  />;
  </>
};

export default VideoCard;
