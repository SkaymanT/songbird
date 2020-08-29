import React from "react";
import "./App.scss";
import { Ibird } from "./interface";
import data from "./data/data";
import AppProvider from "./appContext";
import Main from "./components/main/main";

function App(): JSX.Element {
  const birds: Ibird[][] = data;

  return (
    <div className="container">
      <AppProvider>
        <Main birds={birds}/>
      </AppProvider>
    </div>
  );
}

export default App;
