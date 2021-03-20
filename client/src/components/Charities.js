import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useParams, Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Entry from './Entry';
import axios from 'axios';

function Posts() {
  const [query, setQuery] = useState('');
  const linkTo = `${query}`;

  function handleChange(event) {
    setQuery(event.target.value);
  }
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
  }, [posts]);
  return (
    <div>
      <form className="smallSearch">
        <input type="text" placeholder="Search Waffles :D" onChange={handleChange} value={query}/>
        <Link className="searchGlass" to={linkTo}><FontAwesomeIcon icon={faSearch}/></Link>
      </form>
      <div className="Posts">
      {posts.map(post => {
        console.log(post)
        return <Entry post={post}/>
      })}
      </div>
    </div>
  );
}

export default Posts;