import React from 'react';

export default function TopPanel(): JSX.Element {
  return (
    <div className="top-panel">
      <div className="logo" />
      <h5>
        Score: <span className="score">0</span>
      </h5>
    </div>
  );
}
