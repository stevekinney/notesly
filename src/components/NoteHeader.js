import React from 'react';
import { Route, Link } from 'react-router-dom';

import Styles from '../styles.css';

const EditButton = ({ match }) => (
  <Link className="noteheader__button" to={`${match.params.id}/edit`}>
    Edit
  </Link>
);

const ViewButton = ({ match }) => (
  <Link className="noteheader__button" to={`/notes/${match.params.id}`}>
    View
  </Link>
);

const NoteHeader = ({ title, match }) => (
  <header className="noteheader">
    <h2 className="noteheader__title">{title}</h2>
    <div>
      <Route exact path="/notes/:id" component={EditButton} />
      <Route path="/notes/:id/edit" component={ViewButton} />
      <Link className="noteheader__button" to="/">Close</Link>
    </div>
  </header>
);

export default NoteHeader;
