import React, { useState, useContext } from 'react';
import { randomNumber } from './common/random/random';
import data from './data/data';

type AppContextType = {
  stateApp: StateAppType;
  nextLevel(score: number): void;
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
};

type Props = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: Props): JSX.Element {
  const [stateApp, setStateApp] = useState<StateAppType>({
    score: 0,
    level: 0,
    isNext: false,
    random: 0,
  });

  const nextLevel = (scoreRound: number) => {
    setStateApp((prev) => ({
      score: prev.score + scoreRound,
      level: ++prev.level,
      isNext: true,
      random: randomNumber(0, data[prev.level].length - 1),
    }));
  };

  return (
    <AppContext.Provider value={{ stateApp, nextLevel }}>
      {children}
    </AppContext.Provider>
  );
}
