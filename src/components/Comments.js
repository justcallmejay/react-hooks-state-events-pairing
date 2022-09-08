import React, { useState } from 'react';

function Comments({ video }) {

    const [isBtn, setIsBtn] = useState(true)

    const toggleBtn = isBtn ? "block" : "none"

    function handleBtn() {
      setIsBtn((isBtn) => !isBtn)
    }

    const renderComments = video.map(vid=> {
        return (
            <div>
                <h3>{vid.user}</h3>
                <p>{vid.comment}</p>
            </div>
        )
    })

    return(
        <>
        <div>
        <button name="hide-comments" className="button" onClick={handleBtn}>Hide Comments</button>
        </div>
        <div style={{display: toggleBtn}}>
            {renderComments}
        </div>
        </>
    )
}

export default Comments;