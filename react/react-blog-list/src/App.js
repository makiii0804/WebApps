import { Fragment } from "react";

import { Header } from "./components/Header/Header.jsx";

import { BlogList } from "./components/BlogList/BlogList.jsx";



function App() {
  return (
    <Fragment>
    <Header />
    <BlogList />
    </Fragment>
  );
}

export default App;