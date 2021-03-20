import React from'react';
import Charities from './Charities';
import searchBox from './searchBox'
import { Route, Switch } from 'react-router-dom';

function Body() {
  return (
    <Switch>
      <Route exact path="/" component={searchBox}/>
      <Route path="/search/:q" component={Charities}/>
    </Switch>
  );
}

export default Body;