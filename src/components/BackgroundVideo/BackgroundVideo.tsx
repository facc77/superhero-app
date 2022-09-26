import React from 'react';
import './style.css';
import Background from '../../assets/videos/background.mp4';

const BackgroundVideo: React.FC = () => {
  return (
    <video autoPlay muted loop playsInline id='myVideo'>
      <source src={Background} type='video/mp4' id='myVideo1' />
    </video>
  );
};

export default BackgroundVideo;
