import React, { useEffect, useState } from'react';
import axios from 'axios';
import Entry from './Entry';
import { useParams } from 'react-router-dom'

function Posts() {
  var { q } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:2000/${q}`)
      .then(res => {
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);
  return (
    <div className="Posts">
      {posts.map(post => {
        console.log(post)
        return <Entry post={post}/>
      })}
    </div>
  );
}

export default Posts;