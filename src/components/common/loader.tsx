import React from 'react';

function LoaderCommon(): JSX.Element {
  return (
    <div className="preloader">
      <div className="loader-one">
        <div></div>
        <div></div>
      </div>
      <div className="loader-two">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoaderCommon;
