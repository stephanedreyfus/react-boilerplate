/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Phrases from 'containers/Phrases/Loadable';
import Collection from 'containers/Collection/Loadable';
import NavBar from 'components/NavBar/NavBar';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div className="app-div">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/phrases" component={Phrases} />
        <Route exact path="/collection" component={Collection} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
