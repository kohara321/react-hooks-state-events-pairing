import React, {useState} from "react";
import CommentsCard from "./CommentsCard"

function Comments({ comments }) {
    const[display, setDisplay] = useState(true)

    const comment = comments.map(({ user, comment}) => (
        <CommentsCard key={user} user={user} comment={comment}/>
    ))

    console.log(comment)
    const number = comments.length

    function handleDisplay(){
        setDisplay(!display)
    }

    return(
        <div id="comments">
            <button id="comment-btn" onClick={handleDisplay}>{display ? "Hide Comments" : "Show Comments"}</button>
            <h2>{number} Comments</h2>
            {display ? comment : null}
        </div>
    )
}

export default Comments;