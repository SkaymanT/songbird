import React, { useState, useContext } from 'react';
import { randomNumber } from './common/random/random';
import data from './data/data';

type AppContextType = {
  stateApp: StateAppType;
  nextLevel(score: number): void;
  nextGame(): void;
};

const AppContext = React.createContext<AppContextType>({} as AppContextType);

export const useStateApp = () => {
  return useContext(AppContext);
};

type StateAppType = {
  score: number;
  level: number;
  isNext: boolean;
  random: number;
  isGameOver: boolean;
};

type Props = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: Props): JSX.Element {
  const [stateApp, setStateApp] = useState<StateAppType>({
    score: 0,
    level: 0,
    isNext: false,
    random: randomNumber(0, data[0].length - 1),
    isGameOver: false,
  });

  const nextLevel = (scoreRound: number) => {
    if (stateApp.level === 5) {
      setStateApp((prev) => ({
        score: prev.score + scoreRound,
        level: prev.level,
        isNext: prev.isNext,
        random: randomNumber(0, data[prev.level].length - 1),
        isGameOver: true,
      }));
    } else {
      setStateApp((prev) => ({
        score: prev.score + scoreRound,
        level: prev.level + 1,
        isNext: !prev.isNext,
        random: randomNumber(0, data[prev.level].length - 1),
        isGameOver: false,
      }));
    }
  };

  const nextGame = () => {
    setStateApp((prev) => ({
      score: 0,
      level: 0,
      isNext: false,
      random: randomNumber(0, data[prev.level].length - 1),
      isGameOver: false,
    }));
  };

  return (
    <AppContext.Provider value={{ stateApp, nextLevel, nextGame }}>
      {children}
    </AppContext.Provider>
  );
}
