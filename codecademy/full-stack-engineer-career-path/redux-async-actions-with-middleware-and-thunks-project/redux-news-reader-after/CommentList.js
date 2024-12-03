import React from "react";
import Comment from "./Comment";

export default function CommentList({ comments }) {
  if (comments) {
    return (
      <ul className="comments-list">
        {comments.map((comment) => (
          // Return a Comment component
          <Comment comment={comment} />
        ))}
      </ul>
    );
  }
  return null;
}
