import React from'react';

function Posts(props) {
  var post = props.post;
  return (
    <div className="charityURL">
      <a href={post.url}>{post.name}</a>
      <p>{post.description}</p>
    </div>
  );
}

export default Posts;