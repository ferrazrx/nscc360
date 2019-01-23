import React from "react";
import { VideoContainer } from "./style";

export default function Video() {
  return (
    <VideoContainer autoPlay muted loop>
      <source src="/static/bg.mp4" type="video/mp4" />
    </VideoContainer>
  );
}
