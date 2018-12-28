import React from 'react';

const VideoDetail = ({ video }) => {
  return (
    <div>
      {!video ? (
        'Loading...'
      ) : (
        <div className="ui segment">
          <div className="ui embed">
            <iframe
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title="video player"
            />
          </div>
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      )}
    </div>
  );
};

export default VideoDetail;
