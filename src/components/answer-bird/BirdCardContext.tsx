import React, { useState, useContext } from "react";

type CardContextType = {
  birdCard: StateBirdType;
  toggle(id: number): void;
};

const BirdCardContext = React.createContext<CardContextType | undefined>(
  undefined
);

export const useBirdCard = () => {
  return useContext(BirdCardContext);
};

type StateBirdType = {
  isStart: boolean;
  idActive: number;
};

type Props = {
  children: React.ReactNode;
};

export default function BirdCardProvider({ children }: Props): JSX.Element {
  const [birdCard, setBirdCard] = useState<StateBirdType>({
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
