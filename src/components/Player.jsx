import React from "react";
import { Hls, Media } from "@vidstack/player-react";
import "@vidstack/player/hydrate.js";

const Player = () => {
  return (
    <Media>
      <Hls poster="https://media-files.vidstack.io/poster.png">
        <video
          src="https://media-files.vidstack.io/720p.mp4"
          preload="none"
          data-video="0"
        />
      </Hls>
    </Media>
  );
};

export default Player;
