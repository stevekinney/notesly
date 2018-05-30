import React from 'react';
import { NavLink } from 'react-router-dom';

import Styles from '../styles.css';

const NoteListItem = ({
  id, title, body
}) => {
  const display = body.length > 100 ? `${body.slice(0, 100)}…` : body;
  const destination = `/notes/${id}`;

  return (
    <NavLink to={destination} className="note">
      <h2 className="note__title">{ title }</h2>
      <p className="note__body">{ display }</p>
    </NavLink>
  );
};

export default NoteListItem;
