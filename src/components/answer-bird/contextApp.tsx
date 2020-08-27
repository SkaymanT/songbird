import React, { useState, useContext } from 'react';

type AppContextType = {
  birdCard: StateAppType;
  toggle(id: number): void;
};

const BirdCardContext = React.createContext<AppContextType | undefined>(
  undefined
);

export const useBirdCard = () => {
  return useContext(BirdCardContext);
};

// const nextLevel = (score: number) => {
//   setRandom((prev) => ({
//     level: prev.level++,
//     random: randomNumber(0, data[++prev.level].length - 1),
//     score: score,
//   }));
// };

type StateAppType = {
  isStart: boolean;
  idActive: number;
};

type Props = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: Props): JSX.Element {
  const [birdCard, setBirdCard] = useState<StateAppType>({
    isStart: false,
    idActive: 0,
  });

  const toggle = (id: number) => setBirdCard({ idActive: id, isStart: true });
  return (
    <BirdCardContext.Provider value={{ birdCard, toggle }}>
      {children}
    </BirdCardContext.Provider>
  );
}
