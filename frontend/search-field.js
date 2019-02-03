import React from 'react';

export default ({ onchange, onenter, value }) => (
  <div className="field">
    <label htmlFor="search">Search:</label>
    <input
      onChange={e => onchange(e.target.value)}
      onKeyUp={e => {
        if (e.key !== 'Enter') {
          return;
        }
        onenter(e.target.value);
      }}
      value={value}
      id="search"
      placeholder="for something ..."
      autoComplete="off" />
  </div>
);
