import React from "react";
import { AspectRatio, Hls, Media } from "@vidstack/player-react";
import "@vidstack/player/hydrate.js";

const Player = ({ sources }) => {
  return (
    <Media>
      <AspectRatio ratio="16/9">
        <Hls controls>
          <video src={sources[0].url} preload="none" data-video="0" controls />
        </Hls>
      </AspectRatio>
    </Media>
  );
};

export default Player;
