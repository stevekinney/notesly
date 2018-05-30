import React from 'react';
import { Route } from 'react-router-dom';

import NoteListContainer from '../containers/NoteListContainer';
import EmptyState from './EmptyState';
import NoteViewContainer from '../containers/NoteViewContainer';

import Styles from '../styles.css';

const Application = () => (
  <div className="container">
    <header className="header">
      <h1 className="header__title">Notesly</h1>
    </header>
    <NoteListContainer />
    <Route exact path="/" component={EmptyState} />
    <Route path="/notes/:id" component={NoteViewContainer} />
  </div>
);

export default Application;
