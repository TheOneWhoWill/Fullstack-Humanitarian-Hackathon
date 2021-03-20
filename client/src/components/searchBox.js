import React, { useState } from'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBox() {
  const [query, setQuery] = useState('');
  const linkTo = `search/${query}`;

  function handleChange(event) {
    setQuery(event.target.value);
  }
  return (
    <form onSubmit={e => {e.preventDefault();}}className="searchContainer" method="post">
      <h1>WAFFLES :D</h1>
      <div className="searchBox">
        <input onChange={handleChange} value={query} type="text"/>
        <Link className="searchGlass" to={linkTo}><FontAwesomeIcon icon={faSearch}/></Link>
      </div>
    </form>
  );
}

export default SearchBox;