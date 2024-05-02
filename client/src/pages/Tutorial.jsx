import React from 'react';
import styled from "styled-components";
import { Container, Typography, TextField, Button } from '@mui/material';
const VideoContainer = styled.div`
  overflow-y : scroll;
`;


 const VideoHolder = ({ youtubeLink }) => {

  const extractVideoId = (link) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = link.match(regExp);
    return (match && match[7].length === 11) ? match[7] : '';
  };

  // Function to generate YouTube embed URL
  const generateEmbedUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const videoId = extractVideoId(youtubeLink);
  const embedUrl = generateEmbedUrl(videoId);

  return (
    <Container maxWidth="md" style={{ marginTop: '50px'}}>
      <Typography variant="h4" gutterBottom></Typography>
      {videoId ? (
        <iframe
          width="100%"
          height="500"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <Typography variant="body1">Please provide a valid YouTube video link.</Typography>
      )}
    </Container>
  );
};
const VideoCard = () => {
  const youtubeLink1 = 'https://youtu.be/iCQ2gC4DqJw?si=IJhkZsRIi2pP8Fnx'; 
  const youtubeLink2 = 'https://youtu.be/Siw3bgdJE80?si=1mwzGWk1bQ96C0Oi'; 
  const youtubeLink3 = 'https://youtu.be/lvk2PMsuS88?si=MbO15Ye8CXy_pstR'; 

  return <VideoContainer><VideoHolder youtubeLink={youtubeLink1} />
  <VideoHolder youtubeLink={youtubeLink2} />;
  <VideoHolder youtubeLink={youtubeLink3} />;

  </VideoContainer>
  };
  
  export default VideoCard;

