import React, { useContext } from "react";
import BodyCard from "./body-card";
import { Ibird } from "../../interface";
import { useBirdCard } from "./BirdCardContext";

type Tbird = {
  birds: Ibird[];
};

function BirdCard({ birds }: Tbird): JSX.Element {
  const birdCard = useBirdCard();
  if (!birdCard?.birdCard.isStart)
    return (
      <div className="column">
        <div className="bird-card">
          <p className="description">
            <span>Послушайте плеер.</span>
            <span>Выберите птицу из списка.</span>
          </p>
        </div>
      </div>
    );
  return (
    <div className="column">
      <div className="bird-card">
        <BodyCard bird={birds[birdCard?.birdCard.idActive - 1]} />
        <span className="definition-bird" style={{ display: "flex" }}>
          {birds[birdCard?.birdCard.idActive - 1].description}
        </span>
      </div>
    </div>
  );
}

export default BirdCard;
