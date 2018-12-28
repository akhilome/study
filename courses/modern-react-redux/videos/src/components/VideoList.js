import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => (
    <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.etag} />
  ));
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
