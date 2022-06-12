import React from "react";

function CommentsCard ({ user, comment }) {
    return(
        <div>
            <strong>{user}</strong>
            <p>{comment}</p>
        </div>
    )
}

export default CommentsCard;