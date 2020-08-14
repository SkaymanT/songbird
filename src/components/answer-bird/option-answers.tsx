import React from 'react';

type RandomImg = {
  img: string;
};

function DetailsOption(): JSX.Element {
  return (
    <div className="column">
      <ul className="item-list">
        <li className="list-group-item">
          <span className="li-btn"></span>Ворон
        </li>
      </ul>
    </div>
  );
}

export default DetailsOption;
