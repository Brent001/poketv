import React from "react";
import { AspectRatio, Hls, Media } from "@vidstack/player-react";
import "@vidstack/player/hydrate.js";

const Player = ({ sources }) => {
  return (
    <Media>
      <AspectRatio ratio="16/9" maxHeight="720px">
        <Hls controls>
          <video preload="none" data-video="0">
            {sources.map((source) => (
              <source key={source.url} src={source.url} />
            ))}
          </video>
        </Hls>
      </AspectRatio>
    </Media>
  );
};

export default Player;
