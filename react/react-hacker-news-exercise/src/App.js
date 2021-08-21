import React, {Fragment} from "react";
import {Header} from "./components/Header/Header.jsx"
import {NewsList} from "./components/NewsList/NewsList.jsx"

function App() {
  return (
    <Fragment>
      <Header/>
      <NewsList />
    </Fragment>
  );
}

export default App;
