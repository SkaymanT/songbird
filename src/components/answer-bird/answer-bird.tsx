import React from "react";
import OptionAnswers from "./option-answers";
import BirdCard from "./bird-card";
import { Ibird } from "../../interface";
import BirdCardProvider from "./BirdCardContext";

type BirdList = {
  birds: Ibird[];
  changeBird(id: number): void;
};

export default function AnswerBird({
  birds,
  changeBird,
}: BirdList): JSX.Element {

  return (
    <BirdCardProvider>
      <div className="answer-bird">
        <OptionAnswers
          birds={birds}
          changeBird={changeBird}
        />
        <BirdCard birds={birds} />
        <button className="btn">Next Level</button>
      </div>
    </BirdCardProvider>
  );
}
