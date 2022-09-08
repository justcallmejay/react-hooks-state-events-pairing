import video from "../data/video.js";
import Title from "./Title.js";
import Comments from "./Comments"
import React from 'react'

function App() {
  // console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
    <Title video={video}/>
    <Comments video={video.comments}/>  
    </div>
  );
}

export default App;
