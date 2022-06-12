import React, { useState } from "react";

function Likes({ upvotes, downvotes }) {
    const [upvote, setUpvote] = useState(upvotes)
    const [downvote, setDownvote] = useState(downvotes)

    function handleUpvote() {
        setUpvote(upvote => upvote + 1)
    }

    function handleDownvote() {
        setDownvote(downvote => downvote + 1)
    }

    return(
        <div id="like-btns">
            <button onClick={handleUpvote} >{upvote}👍</button>
            <button onClick={handleDownvote}>{downvote}👎</button>
        </div>
    )

}

export default Likes;