import React from 'react';
import './search-field.css';

export default ({ onchange, onenter, value }) => (
  <div className="field gridify">
    <div className="label">
      <label htmlFor="search">Search:</label>
    </div>
    <div className="control">
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
  </div>
);
