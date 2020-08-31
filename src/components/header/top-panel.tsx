import React from 'react';

type ScoreType = {
  score: number;
};

export default function TopPanel({ score }: ScoreType ): JSX.Element {
  return (
    <div className="top-panel">
      <div className="logo" />
      <h5>
        Счёт: <span className="score">{score}</span>
      </h5>
    </div>
  );
}
