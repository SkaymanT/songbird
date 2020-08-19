import React from 'react';

function GeneralLoader(): JSX.Element {
  return (
    <div className="preloader">
      <div className="general-loader">
        <div className="inner-loader loader-one" />
        <div className="inner-loader loader-two" />
        <div className="inner-loader loader-three" />
      </div>
    </div>
  );
}

export default GeneralLoader;
