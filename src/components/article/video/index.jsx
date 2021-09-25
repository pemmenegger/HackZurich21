import React, { useEffect, useState } from "react";

const Video = () => {
  const [screenHeight, setScreenHeight] = useState();

  useEffect(() => {
    setScreenHeight(window.screen.availHeight);
  }, []);

  return (
    <>
      <div className="w-full h-screen overflow-hidden relative container mt-20 mb-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            title="video"
            src="https://player.vimeo.com/video/614783445?h=e2b585d7d8"
            width={9 * (screenHeight / 16)}
            height={screenHeight}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Video;
