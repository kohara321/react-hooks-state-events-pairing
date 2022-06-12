import React from "react"

function Header ({ title, views, created }) {
    return(
        <div>
            <h1>{title}</h1>
            <small>{views} Views | Uploaded {created}</small>
        </div>
    )
}

export default Header;