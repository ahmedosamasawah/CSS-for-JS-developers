import { useEffect, useRef } from "react";

const VideoPlayer = ({ src, playbackRate }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return <video ref={videoRef} src={src} controls />;
};

export default VideoPlayer;
