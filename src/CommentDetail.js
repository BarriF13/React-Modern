import React from 'react'

export const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.avatar()} alt={"avatar"}/>
      </a>
      <div className="content">
        <a href="" className="author">
          Zarthan
        </a>
        <div className="metadata">
          <span className="date">Today at 5:00 PM</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
  )
}