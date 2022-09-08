import React, { useState } from 'react';
import Comments from './Comments'

function Title({ video }) {

    const [likes, setLikes] = useState(video.upvotes)
    const [dislikes, setDislikes] = useState(video.downvotes)
 

    function handleLikes() {
      setLikes((likes) => likes + 1)
      console.log(likes)
      console.log(video.upvotes)
    }
  
    function handleDislikes() {
      setDislikes(dislikes + 1)
      console.log(dislikes)
    }

    return (
        <>
        <div>
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <button name="likes" className="button" onClick={handleLikes}>{likes} Likes</button>
            <button name="dislikes" className="button" onClick={handleDislikes}>{dislikes} Dislikes</button>
        </div>
    </>
    )
}

export default Title;